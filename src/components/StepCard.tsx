import {
  PHASES,
  type DangerAnswer,
  type RuleSection,
  type TurnStep,
} from '../types'
import { DangerCheck } from './DangerCheck'
import { RuleMarkdown, RuleTitle } from './RuleMarkdown'

interface StepCardProps {
  step: TurnStep
  copy: RuleSection
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
  copy,
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
        <h1>
          <RuleTitle text={copy.title} />
        </h1>
        <RuleMarkdown markdown={copy.markdown} className="step-body" />

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
