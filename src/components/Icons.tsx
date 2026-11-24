import type { ReactNode } from 'react'
import type { Phase } from '../types'

export interface IconProps {
  size?: number
  className?: string
}

function Svg({
  size = 24,
  className,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

export function SkullIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3c-4.4 0-7.5 3-7.5 7.1 0 2.6 1.3 4.6 3.4 5.8v2.6c0 1 .8 1.8 1.8 1.8h4.6c1 0 1.8-.8 1.8-1.8v-2.6c2.1-1.2 3.4-3.2 3.4-5.8C19.5 6 16.4 3 12 3Z" />
      <circle cx="9.2" cy="10.2" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="14.8" cy="10.2" r="1.2" fill="currentColor" stroke="none" />
      <path d="m10.8 13.5 1.2 1.6 1.2-1.6M10.2 18.5v2M13.8 18.5v2" />
    </Svg>
  )
}

export function ManaIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3.5c3.2 4 5.4 6.7 5.4 9.2a5.4 5.4 0 0 1-10.8 0c0-2.5 2.2-5.2 5.4-9.2Z" />
      <path d="M9.5 13.2a2.6 2.6 0 0 0 2.6 2.6" />
    </Svg>
  )
}

export function ActionIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m12 2.8 7.3 4.2v8L12 19.2l-7.3-4.2v-8L12 2.8Z" />
      <circle cx="12" cy="11" r="2.2" />
    </Svg>
  )
}

export function CardsIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="7" y="4" width="10" height="13" rx="1.5" />
      <path d="M5 7H4.5A1.5 1.5 0 0 0 3 8.5v9A1.5 1.5 0 0 0 4.5 19H13" />
      <path d="M10 8h4M10 11h4" />
    </Svg>
  )
}

export function SwordIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m14.5 4 5.5 5.5-9 9-3.5.8.8-3.5 9-9Z" />
      <path d="m6 14 4 4M4 20l2.5-2.5" />
    </Svg>
  )
}

export function ThreatIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 5c0 2 1 3 2.5 4M19 5c0 2-1 3-2.5 4" />
      <path d="M12 4c-4.1 0-7 2.9-7 6.8 0 2.5 1.2 4.4 3.2 5.6V19c0 .6.4 1 1 1h5.6c.6 0 1-.4 1-1v-2.6c2-1.2 3.2-3.1 3.2-5.6C19 6.9 16.1 4 12 4Z" />
      <circle cx="9.2" cy="10.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="14.8" cy="10.5" r="1.1" fill="currentColor" stroke="none" />
      <path d="M9.5 16.5h5" />
    </Svg>
  )
}

export function BroomIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m14 3 7 7M13 7l4-4" />
      <path d="M11 9l4 4-5.5 5.5a3.1 3.1 0 0 1-4.4-4.4L11 9Z" />
      <path d="m4 20 3.5-3.5M8 16l4 4" />
    </Svg>
  )
}

export function LevelUpIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 19V5M6 11l6-6 6 6" />
      <path d="M5 21h14" />
    </Svg>
  )
}

export function BookIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v18H6.5A2.5 2.5 0 0 0 4 23.5v-18Z" />
      <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
    </Svg>
  )
}

export function InfoIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </Svg>
  )
}

export function WarningIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M10.3 4.3 2.8 17.2A2 2 0 0 0 4.5 20h15a2 2 0 0 0 1.7-2.8L13.7 4.3a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4M12 16h.01" />
    </Svg>
  )
}

export function DownloadIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3v11M8 10l4 4 4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </Svg>
  )
}

export function SparkIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3c.5 4.5 2.5 6.5 7 7-4.5.5-6.5 2.5-7 7-.5-4.5-2.5-6.5-7-7 4.5-.5 6.5-2.5 7-7Z" />
      <path d="M19 17c.2 1.8 1 2.6 2.8 2.8-1.8.2-2.6 1-2.8 2.8-.2-1.8-1-2.6-2.8-2.8 1.8-.2 2.6-1 2.8-2.8Z" />
    </Svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </Svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </Svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m5 12 4.5 4.5L19 7" />
    </Svg>
  )
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m15 18-6-6 6-6" />
    </Svg>
  )
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m9 18 6-6-6-6" />
    </Svg>
  )
}

export function PlusIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 5v14M5 12h14" />
    </Svg>
  )
}

export function MinusIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 12h14" />
    </Svg>
  )
}

export function PhaseIcon({ phase, ...props }: IconProps & { phase: Phase }) {
  switch (phase) {
    case 'upkeep':
      return <ManaIcon {...props} />
    case 'draft':
      return <CardsIcon {...props} />
    case 'main':
      return <SwordIcon {...props} />
    case 'threat':
      return <ThreatIcon {...props} />
    case 'cleanup':
      return <BroomIcon {...props} />
  }
}
