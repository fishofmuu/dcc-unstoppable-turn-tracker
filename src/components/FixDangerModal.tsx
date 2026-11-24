import { useEffect, useState } from 'react'
import { MAX_DANGER } from '../lib/game'
import { MinusIcon, PlusIcon } from './Icons'
import { Modal } from './Modal'

interface FixDangerModalProps {
  open: boolean
  level: number
  onClose: () => void
  onApply: (level: number) => void
}

export function FixDangerModal({
  open,
  level,
  onClose,
  onApply,
}: FixDangerModalProps) {
  const [value, setValue] = useState(level)

  useEffect(() => {
    if (open) {
      setValue(level)
    }
  }, [open, level])

  const footer = (
    <>
      <button type="button" className="btn btn-secondary" onClick={onClose}>
        Cancel
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          onApply(value)
          onClose()
        }}
      >
        Apply
      </button>
    </>
  )

  return (
    <Modal
      open={open}
      title="Fix danger level"
      eyebrow="Correction"
      onClose={onClose}
      footer={footer}
    >
      <div className="fix-danger">
        <p className="fix-danger-warning">
          Use this only to correct a mistake. During normal play, the Danger
          Level changes only during the cleanup Danger check.
        </p>
        <div className="fix-danger-row">
          <button
            type="button"
            className="fix-danger-btn"
            onClick={() => setValue((current) => Math.max(0, current - 1))}
            disabled={value <= 0}
            aria-label="Decrease danger level"
          >
            <MinusIcon size={22} />
          </button>
          <span className="fix-danger-value" aria-live="polite">
            {value}
          </span>
          <button
            type="button"
            className="fix-danger-btn"
            onClick={() =>
              setValue((current) => Math.min(MAX_DANGER, current + 1))
            }
            disabled={value >= MAX_DANGER}
            aria-label="Increase danger level"
          >
            <PlusIcon size={22} />
          </button>
        </div>
        <p className="fix-danger-scale">0 is safe · 5 is maximum danger</p>
      </div>
    </Modal>
  )
}
