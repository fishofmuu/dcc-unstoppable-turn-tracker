import { describe, expect, it } from 'vitest'
import { getTurnSteps } from '../data/turnSteps'
import { getLevelUpSteps, parseRuleSections, RULES } from './rules'

describe('rules content', () => {
  it('parses the exported sections', () => {
    const sections = parseRuleSections(
      [
        '<!-- id: solo/example -->',
        '## Example title',
        'Body **text**.',
        '',
        '- one',
        '',
        '> note',
        '<!-- id: levelup/1 -->',
        '## Level title',
        'Level body.',
      ].join('\n'),
    )

    expect(Object.keys(sections)).toEqual(['solo/example', 'levelup/1'])
    expect(sections['solo/example']).toEqual({
      title: 'Example title',
      markdown: 'Body **text**.\n\n- one\n\n> note',
    })
  })

  it('has copy for every turn step', () => {
    for (const playerCount of [1, 2] as const) {
      for (const step of getTurnSteps(playerCount)) {
        const section = RULES[step.id]
        expect(section, step.id).toBeDefined()
        expect(section?.title.trim(), step.id).not.toBe('')
        expect(section?.markdown.trim(), step.id).not.toBe('')
      }
    }
  })

  it('has five level-up sections', () => {
    const steps = getLevelUpSteps()
    expect(steps).toHaveLength(5)
    for (const step of steps) {
      expect(step.title.trim(), step.id).not.toBe('')
      expect(step.markdown.trim(), step.id).not.toBe('')
    }
  })

  it('has a title and body for every parsed section', () => {
    for (const [id, section] of Object.entries(RULES)) {
      expect(section.title.trim(), id).not.toBe('')
      expect(section.markdown.trim(), id).not.toBe('')
    }
  })
})
