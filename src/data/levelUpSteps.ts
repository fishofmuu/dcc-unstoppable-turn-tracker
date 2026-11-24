export interface LevelUpStep {
  title: string
  body: string
  note?: string
}

export const LEVEL_UP_STEPS: LevelUpStep[] = [
  {
    title: 'Advance both level discs',
    body: 'Move both of your level discs up one level on the core market. Level 6 is the normal cap.',
    note: 'In co-op, do this for the player who leveled up.',
  },
  {
    title: 'Discard down and clear the play area',
    body: 'Discard down to 3 cards in hand. Discard all tactics from play. Discard all non-Tough allies and any Tough allies that already have damage. Deal 1 damage to each undamaged Tough ally instead of discarding it.',
  },
  {
    title: 'Optionally eliminate 1 card',
    body: 'You may eliminate any 1 non-boss card from your hand, discard pile, or play area. Set it aside; it will not be used again this game.',
  },
  {
    title: 'Resolve floor-specific effects',
    body: 'Check your floor mat and difficulty for any level-up triggers, such as boss, Stairs, or quest effects. Resolve them now.',
  },
  {
    title: 'Reshuffle your new deck',
    body: 'Take all cards in your discard pile, shuffle them, and place the deck threat side up on your play mat. Then return to the turn.',
  },
]
