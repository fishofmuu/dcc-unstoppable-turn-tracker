import type { PlayerCount, TurnStep } from '../types'

const soloSteps: TurnStep[] = [
  {
    id: 'solo/upkeep-resources',
    phase: 'upkeep',
  },
  {
    id: 'solo/draft-draw',
    phase: 'draft',
  },
  {
    id: 'solo/draft-sleeve',
    phase: 'draft',
  },
  {
    id: 'solo/main',
    phase: 'main',
    levelUp: true,
  },
  {
    id: 'solo/threat',
    phase: 'threat',
  },
  {
    id: 'solo/cleanup-discard',
    phase: 'cleanup',
  },
  {
    id: 'solo/cleanup-refill',
    phase: 'cleanup',
    levelUp: true,
  },
  {
    id: 'solo/cleanup-danger',
    phase: 'cleanup',
    dangerCheck: true,
    nextLabel: 'End Turn',
  },
]

function sharedStep(id: string): TurnStep {
  const step = soloSteps.find((candidate) => candidate.id === id)
  if (!step) {
    throw new Error(`Missing shared step: ${id}`)
  }
  return step
}

const twoPlayerSteps: TurnStep[] = [
  sharedStep('solo/upkeep-resources'),
  {
    id: 'coop/draft-reveal',
    phase: 'draft',
  },
  sharedStep('solo/draft-sleeve'),
  sharedStep('solo/main'),
  sharedStep('solo/threat'),
  sharedStep('solo/cleanup-discard'),
  sharedStep('solo/cleanup-refill'),
  sharedStep('solo/cleanup-danger'),
]

export function getTurnSteps(playerCount: PlayerCount): TurnStep[] {
  return playerCount === 1 ? soloSteps : twoPlayerSteps
}
