import { useEffect, useState } from 'react'
import type { PlayerCount } from '../types'
import {
  BookIcon,
  DownloadIcon,
  InfoIcon,
  SparkIcon,
  WarningIcon,
} from './Icons'
import { Modal } from './Modal'

interface MenuProps {
  open: boolean
  playerCount: PlayerCount
  turn: number
  dangerLevel: number
  onClose: () => void
  onOpenReference: () => void
  onOpenFixDanger: () => void
  onOpenInstall: () => void
  onOpenAbout: () => void
  onRestart: () => void
}

export function Menu({
  open,
  playerCount,
  turn,
  dangerLevel,
  onClose,
  onOpenReference,
  onOpenFixDanger,
  onOpenInstall,
  onOpenAbout,
  onRestart,
}: MenuProps) {
  const [confirming, setConfirming] = useState(false)

  useEffect(() => {
    if (!open) {
      setConfirming(false)
    }
  }, [open])

  return (
    <Modal open={open} title="Menu" eyebrow="DCC Unstoppable Turn Tracker" onClose={onClose}>
      <div className="menu-summary">
        <span className="summary-chip">
          {playerCount === 1 ? 'Solo' : 'Co-op'}
        </span>
        <span className="summary-chip">Turn {turn}</span>
        <span className="summary-chip">Danger {dangerLevel}</span>
      </div>

      <div className="menu-list">
        <button type="button" className="menu-item" onClick={onOpenReference}>
          <BookIcon size={20} />
          <span>
            <strong>Level-up steps</strong>
            <small>The five-step procedure, any time.</small>
          </span>
        </button>

        <button type="button" className="menu-item" onClick={onOpenFixDanger}>
          <WarningIcon size={20} />
          <span>
            <strong>Fix danger level</strong>
            <small>Correct a mistake without changing the turn.</small>
          </span>
        </button>

        <button type="button" className="menu-item" onClick={onOpenInstall}>
          <DownloadIcon size={20} />
          <span>
            <strong>Install app</strong>
            <small>Add it to your Android home screen.</small>
          </span>
        </button>

        <button type="button" className="menu-item" onClick={onOpenAbout}>
          <InfoIcon size={20} />
          <span>
            <strong>About</strong>
            <small>Rules-aid disclaimer and project links.</small>
          </span>
        </button>

        <button
          type="button"
          className="menu-item menu-danger"
          onClick={() => setConfirming(true)}
        >
          <SparkIcon size={20} />
          <span>
            <strong>New crawl</strong>
            <small>Clear this run and choose players again.</small>
          </span>
        </button>
      </div>

      {confirming ? (
        <div className="confirm-box">
          <p>
            Start over? This clears Turn {turn} and Danger {dangerLevel}.
          </p>
          <div className="confirm-actions">
            <button type="button" className="btn btn-danger" onClick={onRestart}>
              Yes, start over
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setConfirming(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}
    </Modal>
  )
}
