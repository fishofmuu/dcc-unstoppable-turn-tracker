import type { PlayerCount, TurnStep } from '../types'

const soloSteps: TurnStep[] = [
  {
    id: 'upkeep-resources',
    phase: 'upkeep',
    title: 'Gain your Upkeep resources',
    body: 'Move your mana marker up 1 space, then place 3 action point discs on your player mat.',
    bullets: [
      'You gain 1 mana even on Turn 1.',
      'On Turn 1, if setup already placed 3 action points, do not add more.',
    ],
    note: 'Mana and action points are spent during the Main Phase.',
  },
  {
    id: 'upkeep-refresh',
    phase: 'upkeep',
    title: 'Refresh your allies',
    body: 'Rotate every exhausted ally upright. Then resolve any effects that trigger during the Upkeep Phase.',
    note: 'Allies stay in play until you level up; refreshing lets you exhaust them again this turn.',
  },
  {
    id: 'draft-draw',
    phase: 'draft',
    title: 'Draft a new card',
    body: 'Find the core deck under your small level disc. Draw the top 3 cards, keep 1, and return the other 2 to the bottom of that deck in any order.',
    bullets: [
      'Do not look at the threat side of the cards.',
      'Your small level disc is the one used for drafting.',
    ],
  },
  {
    id: 'draft-sleeve',
    phase: 'draft',
    title: 'Sleeve your pick',
    body: 'Take the top card of the threat deck without viewing its threat side. Sleeve your chosen core with it, add the new card to your hand, then reset your small level disc to your large level disc.',
    note: 'The threat side stays hidden until the card is revealed from your deck.',
  },
  {
    id: 'main',
    phase: 'main',
    title: 'Main Phase',
    body: 'Take any number of actions in any order. Resolve each action completely before starting the next.',
    bullets: [
      'Play cards by spending action points.',
      'Cast spells by spending mana.',
      'Exhaust allies to use their abilities.',
      'Buy upgrades with gold.',
      'Attack active, looming, or on-deck threats.',
    ],
    note: 'If your deck is empty and there are no active threats, you may level up now.',
    levelUp: true,
  },
  {
    id: 'threat',
    phase: 'threat',
    title: 'Threat Phase',
    body: 'Each active threat deals damage equal to its attack value. Reduce your health by the total. On-deck and looming threats do not attack.',
    bullets: [
      'Damage on threats persists between turns.',
      'If your health reaches 0, you lose immediately.',
    ],
    note: 'Danger-dependent attacks use the current Danger Level.',
  },
  {
    id: 'cleanup-discard',
    phase: 'cleanup',
    title: 'Clear the play area',
    body: 'Discard all tactic cards from play. Remove all remaining action point discs from your player mat.',
    note: 'Unspent action points are lost.',
  },
  {
    id: 'cleanup-refill',
    phase: 'cleanup',
    title: 'Refill the battlefield',
    body: 'Add threats from the top of your deck until 3 non-Fast active threats are on the battlefield and 1 is visible on top of your deck.',
    note: 'If your deck empties before the battlefield is full, level up immediately, then continue refilling.',
    levelUp: true,
  },
  {
    id: 'cleanup-danger',
    phase: 'cleanup',
    title: 'Danger check',
    body: 'Move the danger marker 1 space on the floor mat, skipping spaces based on your difficulty. Then answer the danger check below.',
    bullets: ['If the marker reaches the end of the danger track, you lose.'],
    note: 'After the check, end the turn and begin the next Upkeep Phase.',
    dangerCheck: true,
    nextLabel: 'End Turn',
  },
]

const twoPlayerSteps: TurnStep[] = [
  {
    id: 'upkeep-resources',
    phase: 'upkeep',
    title: 'Both players gain Upkeep resources',
    body: 'Each player moves their mana marker up 1 space and places 3 action point discs on their player mat.',
    bullets: [
      'Complete Upkeep simultaneously.',
      'On Turn 1, if setup already placed 3 action points, do not add more.',
    ],
    note: 'Mana and action points are spent during the Main Phase.',
  },
  {
    id: 'upkeep-refresh',
    phase: 'upkeep',
    title: 'Both players refresh and resolve',
    body: 'Each player rotates every exhausted ally upright. Then resolve any effects that trigger during Upkeep.',
    note: 'Allies stay in play until their owner levels up.',
  },
  {
    id: 'draft-reveal',
    phase: 'draft',
    title: 'Co-op Draft: reveal 2 cards each',
    body: 'Each player draws the top 2 cards from the core deck under their own small level disc.',
    bullets: ['Do not look at the threat side of the cards.'],
  },
  {
    id: 'draft-pick',
    phase: 'draft',
    title: 'Co-op Draft: pick from each set',
    body: 'Each player keeps 1 card. One card must come from each set: if Player 1 picks from Player 2’s set, Player 2 must pick from Player 1’s set. Discuss before choosing.',
    note: 'If an effect increases how many cards a player reveals or keeps, it applies only to that player. Extra picks may come from either set.',
  },
  {
    id: 'draft-sleeve',
    phase: 'draft',
    title: 'Co-op Draft: sleeve and reset',
    body: 'Each player takes the top card of the threat deck, sleeves it with their kept core, adds the new card to their hand, and resets their small level disc to their large level disc.',
    note: 'The threat side stays hidden until the card is revealed from that player’s deck.',
  },
  {
    id: 'main',
    phase: 'main',
    title: 'Main Phase',
    body: 'Both players take actions in any order. Each action must be fully resolved before either player takes another.',
    bullets: [
      'You may target threats on either player’s battlefield.',
      'A defeated threat goes to the hand of the player whose battlefield it came from.',
      'If a player’s deck is empty and that player has no active threats, that player may level up.',
    ],
    note: 'If both players need to level up, run the level-up walkthrough once for each player.',
    levelUp: true,
  },
  {
    id: 'threat',
    phase: 'threat',
    title: 'Threat Phase',
    body: 'Each player takes damage only from the active threats on their own battlefield. On-deck and looming threats do not attack.',
    bullets: [
      'Resolve the phase simultaneously.',
      'If either player’s health reaches 0, you lose.',
    ],
    note: 'Damage on threats persists between turns.',
  },
  {
    id: 'cleanup-discard',
    phase: 'cleanup',
    title: 'Both players clear the play area',
    body: 'Each player discards all tactic cards from play and removes all remaining action point discs from their mat.',
    note: 'Unspent action points are lost.',
  },
  {
    id: 'cleanup-refill',
    phase: 'cleanup',
    title: 'Both players refill threats',
    body: 'Each player adds threats from the top of their deck until 3 non-Fast active threats are on their battlefield and 1 is visible on top of their deck.',
    note: 'If a player’s deck empties, that player levels up immediately. Run the walkthrough for that player, then continue refilling.',
    levelUp: true,
  },
  {
    id: 'cleanup-danger',
    phase: 'cleanup',
    title: 'Danger check',
    body: 'Move the danger marker 1 space total, skipping spaces based on your difficulty. Then answer the danger check below.',
    bullets: ['If the marker reaches the end of the danger track, you lose.'],
    note: 'After the check, end the turn and begin the next Upkeep Phase.',
    dangerCheck: true,
    nextLabel: 'End Turn',
  },
]

export function getTurnSteps(playerCount: PlayerCount): TurnStep[] {
  return playerCount === 1 ? soloSteps : twoPlayerSteps
}
