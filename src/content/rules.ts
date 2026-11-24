import type { RuleSection } from '../types'
import rawRules from './rules.md?raw'

export interface LevelUpCopy extends RuleSection {
  id: string
}

export const LEVEL_UP_IDS = [
  'levelup/1',
  'levelup/2',
  'levelup/3',
  'levelup/4',
  'levelup/5',
] as const

export function parseRuleSections(source: string): Record<string, RuleSection> {
  const sections: Record<string, RuleSection> = {}
  const pattern =
    /<!--\s*id:\s*([a-z0-9/-]+)\s*-->\s*\r?\n##\s+(.+?)\r?\n([\s\S]*?)(?=<!--\s*(?:id|group):|$)/gi

  for (const match of source.matchAll(pattern)) {
    const id = match[1].trim()
    const title = match[2].trim()
    const markdown = match[3].trim()
    sections[id] = { title, markdown }
  }

  return sections
}

export const RULES = parseRuleSections(rawRules)

export function getRuleCopy(id: string): RuleSection {
  const section = RULES[id]
  if (!section || !section.title.trim() || !section.markdown.trim()) {
    return {
      title: 'Rule text needed',
      markdown: `Add a section with \`<!-- id: ${id} -->\` to \`src/content/rules.md\`.`,
    }
  }
  return section
}

export function getLevelUpSteps(): LevelUpCopy[] {
  return LEVEL_UP_IDS.map((id) => ({
    id,
    ...getRuleCopy(id),
  }))
}
