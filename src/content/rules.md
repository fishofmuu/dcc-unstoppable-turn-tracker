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

Custom tokens used in this file: :attack: :defense: :eliminate:
Mapped icons live in src/assets/game-icons/; replace them there.
-->

<!-- group: Solo steps -->

<!-- id: solo/upkeep-resources -->
## Gain your Upkeep resources
- Gain 1 **mana** (:mana:)
- Gain 3 **action points** (:action:)
- Refresh **allies**
- Resolve all "upkeep" effects *(if any)*

<!-- id: solo/draft-draw -->
## Draft a new card
- Find the **core deck** *under your small level disc*.
- Draw the top 3 cards, keep 1, and return the other 2 to the bottom of that deck in any order.
- Reset the small level disc to the top of your large level disc *if needed*

<!-- id: solo/draft-sleeve -->
## Sleeve your pick
- Insert your selected card into the top **threat card**. *Do not look at the threat side of the cards.*
- Add the newly drafted card *to your hand*

> If you run out of threat cards, **GAME OVER**

<!-- id: solo/main -->
## Main Phase
Take any number of actions in any order. Resolve each action completely before starting the next.

- Play cards by spending :action:.
- Cast spells by spending :mana:.
- Exhaust allies to use their abilities.
- Buy upgrades with gold.
- Attack active, looming, or on-deck threats.

Threat HP = **Attack** :attack: + **Defense** :defense:

> If your deck is empty and there are no active threats, level up *immediately*

<!-- id: solo/threat -->
## Threat Phase
Take damage from all active threats in your battlefield.

- Damage on threats persists between turns.
- If your health reaches 0, **GAME OVER**

> Danger-dependent attacks use the current Danger Level.

<!-- id: solo/cleanup-discard -->
## Cleanup - Discard
- Discard all tactic cards from play.
- Lose all unspent action points

<!-- id: solo/cleanup-refill -->
## Cleanup - Refill the battlefield
Add threats from the top of your deck until 3 non-Fast active threats are on the battlefield and 1 is visible on top of your deck.

> If your deck empties before the battlefield is full, level up immediately, then continue refilling.

<!-- id: solo/cleanup-danger -->
## Cleanup - Advance
Move the danger marker 1 space on the floor mat, skipping spaces based on your difficulty. Then answer the danger check below.

- If the marker reaches the end of the danger track, you lose.

> After the check, end the turn and begin the next Upkeep Phase.

<!-- group: Co-op steps -->

<!-- id: coop/draft-reveal -->
## Co-op Draft: draw and pick
- Both players find the core deck *under their small level disc*.
- Both players draw the top 2 cards
- Either player drafts from either pair of cards, but *both players cannot choose from the same pair*
- Reset each small level disc to its large level disc.

> If an effect increases how many cards a player reveals or keeps, it applies only to that player.

<!-- group: Level-up steps -->

<!-- id: levelup/1 -->
## Advance both level discs
Advance both level discs by 1

<!-- id: levelup/2 -->
## Discard
- Discard down to 3 cards in hand.
- Discard all tactics from play.
- Discard all non-Tough allies and any Tough allies that already have damage.
- Deal 1 damage to each undamaged Tough ally.

<!-- id: levelup/3 -->
## Optionally eliminate 1 card
You may :eliminate: any 1 non-boss card from your hand, discard pile, or play area.

<!-- id: levelup/4 -->
## Resolve floor-specific effects
Check your floor mat for level-up triggers.

<!-- id: levelup/5 -->
## Reshuffle your new deck
Shuffle your discard pile and place the deck threat-side up on your play mat.


