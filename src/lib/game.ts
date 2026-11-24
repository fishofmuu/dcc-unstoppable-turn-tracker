import { getTurnSteps } from '../data/turnSteps'
import type { DangerAnswer, GameState, PlayerCount } from '../types'

export const STORAGE_KEY = 'dcc-unstoppable-turn-tracker:v2'
export const MAX_DANGER = 5

export function clampDanger(level: number): number {
  return Math.max(0, Math.min(MAX_DANGER, Math.round(level)))
}

export function createGame(playerCount: PlayerCount): GameState {
  return {
    playerCount,
    turn: 1,
    stepIndex: 0,
    dangerLevel: 0,
    dangerCheckedTurn: null,
    dangerAnswer: null,
    dangerLevelBeforeCheck: null,
  }
}

export function nextStep(state: GameState): GameState {
  const steps = getTurnSteps(state.playerCount)
  if (state.stepIndex < steps.length - 1) {
    return { ...state, stepIndex: state.stepIndex + 1 }
  }
  return {
    ...state,
    turn: state.turn + 1,
    stepIndex: 0,
    dangerAnswer: null,
    dangerLevelBeforeCheck: null,
  }
}

export function previousStep(state: GameState): GameState {
  if (state.stepIndex === 0) {
    return state
  }
  return { ...state, stepIndex: state.stepIndex - 1 }
}

export function isDangerCheckAnswered(state: GameState): boolean {
  return state.dangerCheckedTurn === state.turn && state.dangerAnswer !== null
}

function applyDangerAnswer(state: GameState, answer: DangerAnswer): GameState {
  const base = state.dangerLevelBeforeCheck ?? state.dangerLevel
  return {
    ...state,
    dangerLevel: answer === 'yes' ? clampDanger(base + 1) : base,
    dangerCheckedTurn: state.turn,
    dangerAnswer: answer,
    dangerLevelBeforeCheck: base,
  }
}

export function answerDanger(state: GameState, answer: DangerAnswer): GameState {
  return applyDangerAnswer(state, answer)
}

export function changeDangerAnswer(
  state: GameState,
  answer: DangerAnswer,
): GameState {
  return applyDangerAnswer(state, answer)
}

export function fixDangerLevel(state: GameState, level: number): GameState {
  return {
    ...state,
    dangerLevel: clampDanger(level),
    dangerCheckedTurn: null,
    dangerAnswer: null,
    dangerLevelBeforeCheck: null,
  }
}

export function loadGame(): GameState | null {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return null
    }

    const parsed = JSON.parse(raw) as Partial<GameState>
    if (parsed.playerCount !== 1 && parsed.playerCount !== 2) {
      return null
    }

    const steps = getTurnSteps(parsed.playerCount)
    if (
      typeof parsed.turn !== 'number' ||
      !Number.isInteger(parsed.turn) ||
      parsed.turn < 1 ||
      typeof parsed.stepIndex !== 'number' ||
      !Number.isInteger(parsed.stepIndex) ||
      parsed.stepIndex < 0 ||
      parsed.stepIndex >= steps.length ||
      typeof parsed.dangerLevel !== 'number' ||
      !Number.isInteger(parsed.dangerLevel)
    ) {
      return null
    }

    const dangerCheckedTurn =
      typeof parsed.dangerCheckedTurn === 'number' &&
      Number.isInteger(parsed.dangerCheckedTurn)
        ? parsed.dangerCheckedTurn
        : null
    const hasCurrentAnswer =
      dangerCheckedTurn === parsed.turn &&
      (parsed.dangerAnswer === 'yes' || parsed.dangerAnswer === 'no')
    const dangerAnswer: DangerAnswer | null = hasCurrentAnswer
      ? parsed.dangerAnswer === 'yes'
        ? 'yes'
        : 'no'
      : null

    return {
      playerCount: parsed.playerCount,
      turn: parsed.turn,
      stepIndex: parsed.stepIndex,
      dangerLevel: clampDanger(parsed.dangerLevel),
      dangerCheckedTurn,
      dangerAnswer,
      dangerLevelBeforeCheck:
        dangerAnswer && typeof parsed.dangerLevelBeforeCheck === 'number'
          ? clampDanger(parsed.dangerLevelBeforeCheck)
          : null,
    }
  } catch {
    return null
  }
}

export function saveGame(state: GameState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // Local storage may be unavailable in private browsing; the app still works.
  }
}

export function clearGame(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // Nothing to clear if storage is unavailable.
  }
}
