import { PHASES, type DangerAnswer, type TurnStep } from '../types'
import { DangerCheck } from './DangerCheck'

interface StepCardProps {
  step: TurnStep
  stepNumber: number
  totalSteps: number
  phaseStepNumber: number
  phaseTotal: number
  dangerLevel: number
  dangerPreviousLevel: number
  dangerAnswer: DangerAnswer | null
  dangerAnswered: boolean
  onDangerAnswer: (answer: DangerAnswer) => void
}

export function StepCard({
  step,
  stepNumber,
  totalSteps,
  phaseStepNumber,
  phaseTotal,
  dangerLevel,
  dangerPreviousLevel,
  dangerAnswer,
  dangerAnswered,
  onDangerAnswer,
}: StepCardProps) {
  const phaseLabel =
    PHASES.find((phase) => phase.id === step.phase)?.label ?? step.phase

  return (
    <section aria-live="polite">
      <div className="step-meta">
        <span className="phase-chip">{phaseLabel}</span>
        <span>
          Step {stepNumber} of {totalSteps}
          <span className="step-meta-divider">/</span>
          {phaseStepNumber} of {phaseTotal} in phase
        </span>
      </div>

      <article className="step-card">
        <h1>{step.title}</h1>
        <p className="step-body">{step.body}</p>

        {step.bullets ? (
          <ul className="step-bullets">
            {step.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}

        {step.note ? <p className="step-note">{step.note}</p> : null}

        {step.dangerCheck ? (
          <DangerCheck
            level={dangerLevel}
            previousLevel={dangerPreviousLevel}
            answer={dangerAnswer}
            answered={dangerAnswered}
            onAnswer={onDangerAnswer}
          />
        ) : null}
      </article>
    </section>
  )
}
