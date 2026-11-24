export type PlayerCount = 1 | 2

export type Phase = 'upkeep' | 'draft' | 'main' | 'threat' | 'cleanup'

export type DangerAnswer = 'yes' | 'no'

export interface RuleSection {
  title: string
  markdown: string
}

export interface TurnStep {
  id: string
  phase: Phase
  levelUp?: boolean
  dangerCheck?: boolean
  nextLabel?: string
}

export interface GameState {
  playerCount: PlayerCount
  turn: number
  stepIndex: number
  dangerLevel: number
  dangerCheckedTurn: number | null
  dangerAnswer: DangerAnswer | null
  dangerLevelBeforeCheck: number | null
}

export const PHASES: { id: Phase; label: string; short: string }[] = [
  { id: 'upkeep', label: 'Upkeep', short: 'Upkeep' },
  { id: 'draft', label: 'Draft', short: 'Draft' },
  { id: 'main', label: 'Main', short: 'Main' },
  { id: 'threat', label: 'Threat', short: 'Threat' },
  { id: 'cleanup', label: 'Cleanup', short: 'Cleanup' },
]
