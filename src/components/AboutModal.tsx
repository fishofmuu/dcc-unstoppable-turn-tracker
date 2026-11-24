import { Modal } from './Modal'

interface AboutModalProps {
  open: boolean
  onClose: () => void
}

export function AboutModal({ open, onClose }: AboutModalProps) {
  return (
    <Modal
      open={open}
      title="About"
      eyebrow="DCC Unstoppable Turn Tracker"
      onClose={onClose}
      footer={
        <button type="button" className="btn btn-primary" onClick={onClose}>
          Close
        </button>
      }
    >
      <div className="about-copy">
        <p>
          A mobile-first, offline turn tracker for{' '}
          <strong>Dungeon Crawler Carl: Unstoppable</strong>. It walks through
          the five phases, handles solo and co-op timing, and keeps your place
          between sessions.
        </p>
        <p>
          This is an unofficial fan-made companion. It is not affiliated with
          Renegade Game Studios, Matt Dinniman, or the official game. It is a
          rules aid, not a replacement for the rulebook.
        </p>
        <p className="about-meta">
          Version 1.0.0 ·{' '}
          <a
            href="https://github.com/fishofmuu/dcc-unstoppable-turn-tracker"
            target="_blank"
            rel="noreferrer"
          >
            View the project on GitHub
          </a>
        </p>
      </div>
    </Modal>
  )
}
