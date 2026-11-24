import { Fragment, type ComponentType } from 'react'
import ReactMarkdown, { type Components } from 'react-markdown'
import {
  ActionIcon,
  BroomIcon,
  CardsIcon,
  LevelUpIcon,
  ManaIcon,
  SkullIcon,
  SwordIcon,
  ThreatIcon,
  type IconProps,
} from './Icons'

const customIconModules = import.meta.glob(
  '../assets/game-icons/*.{svg,png,webp}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  },
) as Record<string, string>

const CUSTOM_ICONS: Record<string, string> = Object.fromEntries(
  Object.entries(customIconModules).map(([path, url]) => {
    const name =
      path
        .split('/')
        .pop()
        ?.replace(/\.(svg|png|webp)$/i, '') ?? ''
    return [name.toLowerCase(), url]
  }),
)

const BUILTIN_ICONS: Record<string, ComponentType<IconProps>> = {
  mana: ManaIcon,
  action: ActionIcon,
  actionpoint: ActionIcon,
  'action-point': ActionIcon,
  card: CardsIcon,
  cards: CardsIcon,
  draft: CardsIcon,
  sword: SwordIcon,
  main: SwordIcon,
  threat: ThreatIcon,
  broom: BroomIcon,
  cleanup: BroomIcon,
  levelup: LevelUpIcon,
  'level-up': LevelUpIcon,
  danger: SkullIcon,
  skull: SkullIcon,
}

const ICON_TOKEN = /:([a-z0-9][a-z0-9-]*):/gi
const TITLE_TOKEN = /(:[a-z0-9][a-z0-9-]*:)/gi

export function RuleIcon({ name }: { name: string }) {
  const normalized = name.toLowerCase()
  const custom = CUSTOM_ICONS[normalized]

  if (custom) {
    return (
      <img
        src={custom}
        alt=""
        title={normalized}
        className="rule-icon rule-icon-custom"
      />
    )
  }

  const Builtin = BUILTIN_ICONS[normalized]
  if (Builtin) {
    return <Builtin size={18} className="rule-icon" />
  }

  return (
    <span className="rule-icon-missing" title={`No icon for :${normalized}:`}>
      :{normalized}:
    </span>
  )
}

export function RuleTitle({ text }: { text: string }) {
  return (
    <>
      {text.split(TITLE_TOKEN).map((part, index) => {
        const match = /^:([a-z0-9][a-z0-9-]*):$/i.exec(part)
        return match ? (
          <RuleIcon key={`${part}-${index}`} name={match[1]} />
        ) : (
          <Fragment key={`title-${index}`}>{part}</Fragment>
        )
      })}
    </>
  )
}

const components: Components = {
  ul: ({ children }) => <ul className="step-bullets">{children}</ul>,
  ol: ({ children }) => <ol className="step-ordered">{children}</ol>,
  blockquote: ({ children }) => (
    <blockquote className="step-note">{children}</blockquote>
  ),
  img: ({ src, alt }) => {
    if (typeof src === 'string' && src.startsWith('icon:')) {
      return <RuleIcon name={src.slice(5)} />
    }
    if (!src) {
      return null
    }
    return <img src={src} alt={alt ?? ''} className="rule-image" />
  },
}

interface RuleMarkdownProps {
  markdown: string
  className?: string
}

export function RuleMarkdown({ markdown, className }: RuleMarkdownProps) {
  const content = markdown.replace(
    ICON_TOKEN,
    (_, name: string) => `![${name}](icon:${name.toLowerCase()})`,
  )

  return (
    <div className={`rule-markdown${className ? ` ${className}` : ''}`}>
      <ReactMarkdown
        components={components}
        urlTransform={(url) => url}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
