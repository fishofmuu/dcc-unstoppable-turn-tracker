import logo from '../assets/Logo.webp'
import { DangerBadge } from './DangerBadge'
import { MenuIcon } from './Icons'

interface HeaderProps {
  dangerLevel: number
  turn: number
  onMenu: () => void
}

export function Header({ dangerLevel, turn, onMenu }: HeaderProps) {
  return (
    <header className="app-header">
      <button
        type="button"
        className="icon-btn"
        onClick={onMenu}
        aria-label="Open menu"
      >
        <MenuIcon size={22} />
      </button>

      <div className="brand">
        <img
          src={logo}
          alt="Dungeon Crawler Carl: Unstoppable"
          className="brand-logo"
        />
        <span className="app-name">DCC Unstoppable Turn Tracker</span>
      </div>

      <DangerBadge level={dangerLevel} turn={turn} />
    </header>
  )
}
