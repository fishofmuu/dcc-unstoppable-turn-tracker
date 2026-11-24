import type { PlayerCount, TurnStep } from '../types'

const soloSteps: TurnStep[] = [
  {
    id: 'solo/upkeep-resources',
    phase: 'upkeep',
  },
  {
    id: 'solo/upkeep-refresh',
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

const twoPlayerSteps: TurnStep[] = [
  {
    id: 'coop/upkeep-resources',
    phase: 'upkeep',
  },
  {
    id: 'coop/upkeep-refresh',
    phase: 'upkeep',
  },
  {
    id: 'coop/draft-reveal',
    phase: 'draft',
  },
  {
    id: 'coop/draft-pick',
    phase: 'draft',
  },
  {
    id: 'coop/draft-sleeve',
    phase: 'draft',
  },
  {
    id: 'coop/main',
    phase: 'main',
    levelUp: true,
  },
  {
    id: 'coop/threat',
    phase: 'threat',
  },
  {
    id: 'coop/cleanup-discard',
    phase: 'cleanup',
  },
  {
    id: 'coop/cleanup-refill',
    phase: 'cleanup',
    levelUp: true,
  },
  {
    id: 'coop/cleanup-danger',
    phase: 'cleanup',
    dangerCheck: true,
    nextLabel: 'End Turn',
  },
]

export function getTurnSteps(playerCount: PlayerCount): TurnStep[] {
  return playerCount === 1 ? soloSteps : twoPlayerSteps
}
