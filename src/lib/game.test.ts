import { describe, expect, it } from 'vitest'
import { getTurnSteps } from '../data/turnSteps'
import {
  answerDanger,
  changeDangerAnswer,
  createGame,
  fixDangerLevel,
  isDangerCheckAnswered,
  nextStep,
  previousStep,
} from './game'

describe('game state', () => {
  it('creates a solo game at Turn 1, Upkeep, Danger 0', () => {
    const game = createGame(1)
    expect(game).toMatchObject({
      playerCount: 1,
      turn: 1,
      stepIndex: 0,
      dangerLevel: 0,
    })
    expect(isDangerCheckAnswered(game)).toBe(false)
  })

  it('advances one step without changing the turn', () => {
    const game = nextStep(createGame(1))
    expect(game.stepIndex).toBe(1)
    expect(game.turn).toBe(1)
  })

  it('ends the turn after the last step and keeps danger', () => {
    let game = createGame(1)
    game = {
      ...game,
      stepIndex: getTurnSteps(1).length - 1,
      dangerLevel: 2,
    }
    const next = nextStep(game)
    expect(next.turn).toBe(2)
    expect(next.stepIndex).toBe(0)
    expect(next.dangerLevel).toBe(2)
    expect(next.dangerAnswer).toBeNull()
  })

  it('does not go back before the first step', () => {
    const game = createGame(1)
    expect(previousStep(game)).toEqual(game)
  })

  it('applies and changes a danger answer', () => {
    let game = createGame(1)
    game = answerDanger(game, 'yes')
    expect(game.dangerLevel).toBe(1)
    expect(isDangerCheckAnswered(game)).toBe(true)

    game = changeDangerAnswer(game, 'no')
    expect(game.dangerLevel).toBe(0)

    game = changeDangerAnswer(game, 'yes')
    expect(game.dangerLevel).toBe(1)
  })

  it('caps danger at 5 and clears the check when fixed', () => {
    let game = fixDangerLevel(createGame(1), 5)
    game = answerDanger(game, 'yes')
    expect(game.dangerLevel).toBe(5)

    game = fixDangerLevel(
      {
        ...game,
        dangerCheckedTurn: game.turn,
        dangerAnswer: 'yes',
        dangerLevelBeforeCheck: 4,
      },
      9,
    )
    expect(game.dangerLevel).toBe(5)
    expect(game.dangerAnswer).toBeNull()
    expect(game.dangerCheckedTurn).toBeNull()
  })
})
