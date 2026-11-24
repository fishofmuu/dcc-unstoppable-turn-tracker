import { getLevelUpSteps } from '../content/rules'
import { Modal } from './Modal'
import { RuleMarkdown, RuleTitle } from './RuleMarkdown'

interface LevelUpReferenceProps {
  open: boolean
  onClose: () => void
}

export function LevelUpReference({ open, onClose }: LevelUpReferenceProps) {
  const steps = getLevelUpSteps()

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
        {steps.map((step) => (
          <li key={step.id}>
            <h3>
              <RuleTitle text={step.title} />
            </h3>
            <RuleMarkdown markdown={step.markdown} className="reference-copy" />
          </li>
        ))}
      </ol>
    </Modal>
  )
}
