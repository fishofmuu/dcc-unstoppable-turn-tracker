import { PHASES, type Phase } from '../types'
import { CheckIcon, PhaseIcon } from './Icons'

interface PhaseRailProps {
  currentPhase: Phase
}

export function PhaseRail({ currentPhase }: PhaseRailProps) {
  const currentIndex = PHASES.findIndex((phase) => phase.id === currentPhase)

  return (
    <nav className="phase-rail" aria-label="Turn phases">
      {PHASES.map((phase, index) => {
        const state =
          index < currentIndex
            ? 'done'
            : index === currentIndex
              ? 'active'
              : 'upcoming'

        return (
          <div
            key={phase.id}
            className={`phase-node phase-${state}`}
            aria-current={state === 'active' ? 'step' : undefined}
            title={`${phase.label} Phase`}
          >
            <span className="phase-icon">
              {state === 'done' ? (
                <CheckIcon size={16} />
              ) : (
                <PhaseIcon phase={phase.id} size={18} />
              )}
            </span>
            <span className="phase-label">{phase.short}</span>
          </div>
        )
      })}
    </nav>
  )
}
