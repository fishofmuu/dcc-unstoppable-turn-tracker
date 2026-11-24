import { DownloadIcon } from './Icons'
import { Modal } from './Modal'

interface InstallModalProps {
  open: boolean
  promptAvailable: boolean
  onClose: () => void
  onInstall: () => void
}

export function InstallModal({
  open,
  promptAvailable,
  onClose,
  onInstall,
}: InstallModalProps) {
  const footer = (
    <>
      <button type="button" className="btn btn-secondary" onClick={onClose}>
        Close
      </button>
      {promptAvailable ? (
        <button type="button" className="btn btn-primary" onClick={onInstall}>
          <DownloadIcon size={18} />
          Install now
        </button>
      ) : null}
    </>
  )

  return (
    <Modal
      open={open}
      title="Install on Android"
      eyebrow="Play offline"
      onClose={onClose}
      footer={footer}
    >
      <div className="install-copy">
        <p>
          This tracker installs like an app, keeps your crawl on the device,
          and works offline after the first load.
        </p>
        <ol className="install-steps">
          <li>Open this page in Chrome on your Android device.</li>
          <li>Tap the three-dot menu in the top-right corner.</li>
          <li>Tap <strong>Install app</strong> (or <strong>Add to Home screen</strong>).</li>
          <li>Launch it from your home screen.</li>
        </ol>
        <p className="install-note">
          On iPhone, use Safari’s Share menu and choose{' '}
          <strong>Add to Home Screen</strong>.
        </p>
      </div>
    </Modal>
  )
}
