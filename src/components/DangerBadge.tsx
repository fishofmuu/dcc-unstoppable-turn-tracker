import { SkullIcon } from './Icons'

interface DangerBadgeProps {
  level: number
  turn: number
}

export function DangerBadge({ level, turn }: DangerBadgeProps) {
  const tone = level >= 4 ? 'critical' : level >= 2 ? 'warning' : 'calm'

  return (
    <div
      className={`danger-badge danger-${tone}`}
      aria-label={`Danger Level ${level}. Turn ${turn}.`}
      title="The Danger Level is updated during Cleanup."
    >
      <SkullIcon size={19} />
      <div className="danger-copy">
        <span className="danger-label">Danger</span>
        <strong className="danger-value" aria-live="polite">
          {level}
        </strong>
      </div>
      <span className="turn-chip">Turn {turn}</span>
    </div>
  )
}
