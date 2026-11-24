import { useState } from 'react'
import logo from '../assets/Logo.webp'
import icon1p from '../assets/icons/1p.svg'
import icon2p from '../assets/icons/2p.svg'
import type { PlayerCount } from '../types'

interface SetupScreenProps {
  onStart: (playerCount: PlayerCount) => void
}

export function SetupScreen({ onStart }: SetupScreenProps) {
  const [selected, setSelected] = useState<PlayerCount>(1)

  return (
    <div className="setup-shell">
      <header className="setup-header">
        <img
          src={logo}
          alt="Dungeon Crawler Carl: Unstoppable"
          className="setup-logo"
        />
        <p className="setup-app-name">DCC Unstoppable Turn Tracker</p>
      </header>

      <main className="setup-main">
        <h1 id="player-count-title">How many crawlers?</h1>
        <div
          className="player-options"
          role="group"
          aria-labelledby="player-count-title"
        >
          <button
            type="button"
            className={`player-card${selected === 1 ? ' selected' : ''}`}
            onClick={() => setSelected(1)}
            aria-pressed={selected === 1}
          >
            <img src={icon1p} alt="" className="player-icon" />
            <span className="player-name">Solo</span>
          </button>

          <button
            type="button"
            className={`player-card${selected === 2 ? ' selected' : ''}`}
            onClick={() => setSelected(2)}
            aria-pressed={selected === 2}
          >
            <img src={icon2p} alt="" className="player-icon" />
            <span className="player-name">Co-op</span>
          </button>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-start"
          onClick={() => onStart(selected)}
        >
          Start Crawl
        </button>
      </main>

      <footer className="setup-footer">
        Unofficial fan-made companion. Not affiliated with Renegade Game
        Studios or Matt Dinniman.
      </footer>
    </div>
  )
}
