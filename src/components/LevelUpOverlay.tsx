import { LEVEL_UP_STEPS } from '../data/levelUpSteps'
import { ChevronLeftIcon, ChevronRightIcon } from './Icons'
import { Modal } from './Modal'

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
  const step = LEVEL_UP_STEPS[stepIndex]
  const isFirst = stepIndex === 0
  const isLast = stepIndex === LEVEL_UP_STEPS.length - 1

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

      <div className="progress-dots" aria-label={`Level-up step ${stepIndex + 1} of ${LEVEL_UP_STEPS.length}`}>
        {LEVEL_UP_STEPS.map((_, index) => (
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
        <h3>{step.title}</h3>
        <p>{step.body}</p>
        {step.note ? <p className="levelup-step-note">{step.note}</p> : null}
      </div>

      {isLast ? (
        <p className="overlay-note">
          If both players leveled up, run this walkthrough again for the other player.
        </p>
      ) : null}
    </Modal>
  )
}
