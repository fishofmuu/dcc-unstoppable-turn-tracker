import { describe, expect, it } from 'vitest'
import { PHASES } from '../types'
import { getTurnSteps } from './turnSteps'

describe('turn steps', () => {
  it('has the expected solo loop', () => {
    const steps = getTurnSteps(1)
    expect(steps).toHaveLength(9)
    expect(steps[0].phase).toBe('upkeep')
    expect(steps[steps.length - 1].phase).toBe('cleanup')
    expect(new Set(steps.map((step) => step.id)).size).toBe(steps.length)
    expect(steps.filter((step) => step.dangerCheck)).toHaveLength(1)
    expect(steps[steps.length - 1].dangerCheck).toBe(true)
    expect(steps.filter((step) => step.levelUp)).toHaveLength(2)
  })

  it('has the expected two-player loop', () => {
    const steps = getTurnSteps(2)
    expect(steps).toHaveLength(10)
    expect(steps.filter((step) => step.phase === 'draft')).toHaveLength(3)
    expect(steps[steps.length - 1].dangerCheck).toBe(true)
  })

  it('keeps the five phases in order', () => {
    const order = PHASES.map((phase) => phase.id)
    for (const playerCount of [1, 2] as const) {
      const indices = getTurnSteps(playerCount).map((step) =>
        order.indexOf(step.phase),
      )
      expect([...indices].sort((a, b) => a - b)).toEqual(indices)
    }
  })
})
