<!--
DCC UNSTOPPABLE TURN TRACKER — RULES TEXT

This is the only place the app reads rule text from.
Edit the heading and Markdown under each `<!-- id: ... -->` marker.
Keep the id comment so the app can match the section to its step.

Markdown supported: paragraphs, **bold**, *italic*, `code`, links,
- bullet lists
1. numbered lists
> blockquote notes

Inline icons: use a token anywhere in the text, including headings.
  :mana:   :action:   :card:   :sword:   :threat:   :broom:
  :levelup:  :danger:  :skull:

Custom icons: put a file named after the token in src/assets/game-icons/.
Examples: mana.svg, action.png, health.svg. A custom file replaces the
built-in icon; if there is no custom or built-in icon, the token text is shown.
-->

<!-- group: Solo steps -->

<!-- id: solo/upkeep-resources -->
## Gain your Upkeep resources
Move your :mana: marker up 1 space, then place 3 :action: discs on your player mat.

- You gain 1 :mana: even on Turn 1.
- On Turn 1, if setup already placed 3 :action: points, do not add more.

> :mana: and :action: are spent during the Main Phase.

<!-- id: solo/upkeep-refresh -->
## Refresh your allies
Rotate every exhausted ally upright. Then resolve any effects that trigger during the Upkeep Phase.

> Allies stay in play until you level up; refreshing lets you exhaust them again this turn.

<!-- id: solo/draft-draw -->
## Draft a new card
Find the core deck under your small level disc. Draw the top 3 cards, keep 1, and return the other 2 to the bottom of that deck in any order.

- Do not look at the threat side of the cards.
- Your small level disc is the one used for drafting.

<!-- id: solo/draft-sleeve -->
## Sleeve your pick
Take the top card of the threat deck without viewing its threat side. Sleeve your chosen core with it, add the new card to your hand, then reset your small level disc to your large level disc.

> The threat side stays hidden until the card is revealed from your deck.

<!-- id: solo/main -->
## Main Phase
Take any number of actions in any order. Resolve each action completely before starting the next.

- Play cards by spending :action:.
- Cast spells by spending :mana:.
- Exhaust allies to use their abilities.
- Buy upgrades with gold.
- Attack active, looming, or on-deck threats.

> If your deck is empty and there are no active threats, you may level up now.

<!-- id: solo/threat -->
## Threat Phase
Each active threat deals damage equal to its attack value. Reduce your health by the total. On-deck and looming threats do not attack.

- Damage on threats persists between turns.
- If your health reaches 0, you lose immediately.

> Danger-dependent attacks use the current Danger Level.

<!-- id: solo/cleanup-discard -->
## Clear the play area
Discard all tactic cards from play. Remove all remaining action point discs from your player mat.

> Unspent action points are lost.

<!-- id: solo/cleanup-refill -->
## Refill the battlefield
Add threats from the top of your deck until 3 non-Fast active threats are on the battlefield and 1 is visible on top of your deck.

> If your deck empties before the battlefield is full, level up immediately, then continue refilling.

<!-- id: solo/cleanup-danger -->
## Danger check
Move the danger marker 1 space on the floor mat, skipping spaces based on your difficulty. Then answer the danger check below.

- If the marker reaches the end of the danger track, you lose.

> After the check, end the turn and begin the next Upkeep Phase.

<!-- group: Co-op steps -->

<!-- id: coop/upkeep-resources -->
## Both players gain Upkeep resources
Each player moves their :mana: marker up 1 space and places 3 :action: discs on their player mat.

- Complete Upkeep simultaneously.
- On Turn 1, if setup already placed 3 :action: points, do not add more.

> :mana: and :action: are spent during the Main Phase.

<!-- id: coop/upkeep-refresh -->
## Both players refresh and resolve
Each player rotates every exhausted ally upright. Then resolve any effects that trigger during Upkeep.

> Allies stay in play until their owner levels up.

<!-- id: coop/draft-reveal -->
## Co-op Draft: reveal 2 cards each
Each player draws the top 2 cards from the core deck under their own small level disc.

- Do not look at the threat side of the cards.

<!-- id: coop/draft-pick -->
## Co-op Draft: pick from each set
Each player keeps 1 card. One card must come from each set: if Player 1 picks from Player 2’s set, Player 2 must pick from Player 1’s set. Discuss before choosing.

> If an effect increases how many cards a player reveals or keeps, it applies only to that player. Extra picks may come from either set.

<!-- id: coop/draft-sleeve -->
## Co-op Draft: sleeve and reset
Each player takes the top card of the threat deck, sleeves it with their kept core, adds the new card to their hand, and resets their small level disc to their large level disc.

> The threat side stays hidden until the card is revealed from that player’s deck.

<!-- id: coop/main -->
## Main Phase
Both players take actions in any order. Each action must be fully resolved before either player takes another.

- You may target threats on either player’s battlefield.
- A defeated threat goes to the hand of the player whose battlefield it came from.
- If a player’s deck is empty and that player has no active threats, that player may level up.

> If both players need to level up, run the level-up walkthrough once for each player.

<!-- id: coop/threat -->
## Threat Phase
Each player takes damage only from the active threats on their own battlefield. On-deck and looming threats do not attack.

- Resolve the phase simultaneously.
- If either player’s health reaches 0, you lose.

> Damage on threats persists between turns.

<!-- id: coop/cleanup-discard -->
## Both players clear the play area
Each player discards all tactic cards from play and removes all remaining action point discs from their mat.

> Unspent action points are lost.

<!-- id: coop/cleanup-refill -->
## Both players refill threats
Each player adds threats from the top of their deck until 3 non-Fast active threats are on their battlefield and 1 is visible on top of their deck.

> If a player’s deck empties, that player levels up immediately. Run the walkthrough for that player, then continue refilling.

<!-- id: coop/cleanup-danger -->
## Danger check
Move the danger marker 1 space total, skipping spaces based on your difficulty. Then answer the danger check below.

- If the marker reaches the end of the danger track, you lose.

> After the check, end the turn and begin the next Upkeep Phase.

<!-- group: Level-up steps -->

<!-- id: levelup/1 -->
## Advance both level discs
Move both of your level discs up one level on the core market. Level 6 is the normal cap.

> In co-op, do this for the player who leveled up.

<!-- id: levelup/2 -->
## Discard down and clear the play area
Discard down to 3 cards in hand. Discard all tactics from play. Discard all non-Tough allies and any Tough allies that already have damage. Deal 1 damage to each undamaged Tough ally instead of discarding it.

<!-- id: levelup/3 -->
## Optionally eliminate 1 card
You may eliminate any 1 non-boss card from your hand, discard pile, or play area. Set it aside; it will not be used again this game.

<!-- id: levelup/4 -->
## Resolve floor-specific effects
Check your floor mat and difficulty for any level-up triggers, such as boss, Stairs, or quest effects. Resolve them now.

<!-- id: levelup/5 -->
## Reshuffle your new deck
Take all cards in your discard pile, shuffle them, and place the deck threat side up on your play mat. Then return to the turn.

> If both players leveled up, run this walkthrough again for the other player.
