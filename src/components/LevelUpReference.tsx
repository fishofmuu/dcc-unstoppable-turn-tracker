import { LEVEL_UP_STEPS } from '../data/levelUpSteps'
import { Modal } from './Modal'

interface LevelUpReferenceProps {
  open: boolean
  onClose: () => void
}

export function LevelUpReference({ open, onClose }: LevelUpReferenceProps) {
  return (
    <Modal
      open={open}
      title="Level-Up Steps"
      eyebrow="Quick reference"
      onClose={onClose}
      className="reference-modal"
      footer={
        <button type="button" className="btn btn-primary" onClick={onClose}>
          Got it
        </button>
      }
    >
      <ol className="reference-list">
        {LEVEL_UP_STEPS.map((step) => (
          <li key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </Modal>
  )
}
