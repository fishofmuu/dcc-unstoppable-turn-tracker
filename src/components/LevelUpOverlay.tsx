import { getLevelUpSteps } from '../content/rules'
import { ChevronLeftIcon, ChevronRightIcon } from './Icons'
import { Modal } from './Modal'
import { RuleMarkdown, RuleTitle } from './RuleMarkdown'

interface LevelUpOverlayProps {
  open: boolean
  stepIndex: number
  turn: number
  dangerLevel: number
  onStepIndexChange: (index: number) => void
  onClose: () => void
}

export function LevelUpOverlay({
  open,
  stepIndex,
  turn,
  dangerLevel,
  onStepIndexChange,
  onClose,
}: LevelUpOverlayProps) {
  const steps = getLevelUpSteps()
  const step = steps[stepIndex] ?? steps[0]
  const isFirst = stepIndex === 0
  const isLast = stepIndex === steps.length - 1

  const footer = (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => onStepIndexChange(stepIndex - 1)}
        disabled={isFirst}
      >
        <ChevronLeftIcon size={18} />
        Back
      </button>
      {isLast ? (
        <button type="button" className="btn btn-primary" onClick={onClose}>
          Return to Turn
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onStepIndexChange(stepIndex + 1)}
        >
          Next
          <ChevronRightIcon size={18} />
        </button>
      )}
    </>
  )

  return (
    <Modal
      open={open}
      title="Level Up"
      eyebrow="New Achievement!"
      onClose={onClose}
      className="levelup-modal"
      footer={footer}
    >
      <div className="levelup-meta">
        <span className="summary-chip">Turn {turn}</span>
        <span className="summary-chip">Danger {dangerLevel}</span>
      </div>

      <div
        className="progress-dots"
        aria-label={`Level-up step ${stepIndex + 1} of ${steps.length}`}
      >
        {steps.map((_, index) => (
          <span
            key={index}
            className={`progress-dot${
              index === stepIndex ? ' active' : index < stepIndex ? ' done' : ''
            }`}
          />
        ))}
      </div>

      <div className="levelup-step">
        <span className="step-number">{stepIndex + 1}</span>
        <h3>
          <RuleTitle text={step.title} />
        </h3>
        <RuleMarkdown markdown={step.markdown} className="levelup-step-copy" />
      </div>
    </Modal>
  )
}
