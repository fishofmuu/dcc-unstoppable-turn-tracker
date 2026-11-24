import { useEffect, useState } from 'react'
import { AboutModal } from './components/AboutModal'
import { FixDangerModal } from './components/FixDangerModal'
import { Header } from './components/Header'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  LevelUpIcon,
} from './components/Icons'
import { InstallModal } from './components/InstallModal'
import { LevelUpOverlay } from './components/LevelUpOverlay'
import { LevelUpReference } from './components/LevelUpReference'
import { Menu } from './components/Menu'
import { PhaseRail } from './components/PhaseRail'
import { SetupScreen } from './components/SetupScreen'
import { StepCard } from './components/StepCard'
import { getRuleCopy } from './content/rules'
import { getTurnSteps } from './data/turnSteps'
import {
  answerDanger,
  changeDangerAnswer,
  clearGame,
  createGame,
  fixDangerLevel,
  isDangerCheckAnswered,
  loadGame,
  nextStep,
  previousStep,
  saveGame,
} from './lib/game'
import type { DangerAnswer, GameState } from './types'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

export default function App() {
  const [game, setGame] = useState<GameState | null>(() => loadGame())
  const [menuOpen, setMenuOpen] = useState(false)
  const [levelUpOpen, setLevelUpOpen] = useState(false)
  const [levelUpIndex, setLevelUpIndex] = useState(0)
  const [referenceOpen, setReferenceOpen] = useState(false)
  const [fixDangerOpen, setFixDangerOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [installOpen, setInstallOpen] = useState(false)
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    if (game) {
      saveGame(game)
    }
  }, [game])

  useEffect(() => {
    const handleInstallPrompt = (event: Event) => {
      event.preventDefault()
      setInstallPrompt(event as BeforeInstallPromptEvent)
    }

    window.addEventListener('beforeinstallprompt', handleInstallPrompt)
    return () =>
      window.removeEventListener('beforeinstallprompt', handleInstallPrompt)
  }, [])

  if (!game) {
    return (
      <SetupScreen onStart={(playerCount) => setGame(createGame(playerCount))} />
    )
  }

  const steps = getTurnSteps(game.playerCount)
  const step = steps[game.stepIndex]
  const copy = getRuleCopy(step.id)
  const phaseSteps = steps.filter((candidate) => candidate.phase === step.phase)
  const phaseStepNumber =
    phaseSteps.findIndex((candidate) => candidate.id === step.id) + 1
  const isLastStep = game.stepIndex === steps.length - 1
  const nextLabel = step.nextLabel ?? (isLastStep ? 'Next Turn' : 'Next Step')
  const dangerAnswered = isDangerCheckAnswered(game)
  const dangerPreviousLevel = game.dangerLevelBeforeCheck ?? game.dangerLevel

  const goNext = () =>
    setGame((current) => (current ? nextStep(current) : current))
  const goBack = () =>
    setGame((current) => (current ? previousStep(current) : current))

  const answerDangerForTurn = (answer: DangerAnswer) => {
    setGame((current) => {
      if (!current) {
        return current
      }
      return isDangerCheckAnswered(current)
        ? changeDangerAnswer(current, answer)
        : answerDanger(current, answer)
    })
  }

  const openLevelUp = () => {
    setLevelUpIndex(0)
    setLevelUpOpen(true)
  }

  const openReference = () => {
    setMenuOpen(false)
    setReferenceOpen(true)
  }

  const openFixDanger = () => {
    setMenuOpen(false)
    setFixDangerOpen(true)
  }

  const openInstall = () => {
    setMenuOpen(false)
    setInstallOpen(true)
  }

  const openAbout = () => {
    setMenuOpen(false)
    setAboutOpen(true)
  }

  const restart = () => {
    clearGame()
    setGame(null)
    setMenuOpen(false)
    setLevelUpOpen(false)
    setReferenceOpen(false)
    setFixDangerOpen(false)
    setAboutOpen(false)
    setInstallOpen(false)
  }

  const applyDangerFix = (level: number) => {
    setGame((current) => (current ? fixDangerLevel(current, level) : current))
  }

  const install = async () => {
    if (!installPrompt) {
      return
    }
    await installPrompt.prompt()
    await installPrompt.userChoice
    setInstallPrompt(null)
    setInstallOpen(false)
  }

  return (
    <div className="app-shell">
      <Header
        dangerLevel={game.dangerLevel}
        turn={game.turn}
        onMenu={() => setMenuOpen(true)}
      />

      <PhaseRail currentPhase={step.phase} />

      <main className="app-main">
        <StepCard
          step={step}
          copy={copy}
          stepNumber={game.stepIndex + 1}
          totalSteps={steps.length}
          phaseStepNumber={phaseStepNumber}
          phaseTotal={phaseSteps.length}
          dangerLevel={game.dangerLevel}
          dangerPreviousLevel={dangerPreviousLevel}
          dangerAnswer={game.dangerAnswer}
          dangerAnswered={dangerAnswered}
          onDangerAnswer={answerDangerForTurn}
        />
      </main>

      <div className="action-bar">
        <div className="action-inner">
          {step.levelUp ? (
            <button
              type="button"
              className="btn btn-levelup"
              onClick={openLevelUp}
            >
              <LevelUpIcon size={20} />
              Level Up
            </button>
          ) : null}

          <div className="action-row">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={goBack}
              disabled={game.stepIndex === 0}
            >
              <ChevronLeftIcon size={18} />
              Back
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={goNext}
              disabled={Boolean(step.dangerCheck && !dangerAnswered)}
            >
              {nextLabel}
              <ChevronRightIcon size={18} />
            </button>
          </div>
        </div>
      </div>

      <Menu
        open={menuOpen}
        playerCount={game.playerCount}
        turn={game.turn}
        dangerLevel={game.dangerLevel}
        onClose={() => setMenuOpen(false)}
        onOpenReference={openReference}
        onOpenFixDanger={openFixDanger}
        onOpenInstall={openInstall}
        onOpenAbout={openAbout}
        onRestart={restart}
      />

      <LevelUpOverlay
        open={levelUpOpen}
        stepIndex={levelUpIndex}
        turn={game.turn}
        dangerLevel={game.dangerLevel}
        onStepIndexChange={setLevelUpIndex}
        onClose={() => setLevelUpOpen(false)}
      />

      <LevelUpReference
        open={referenceOpen}
        onClose={() => setReferenceOpen(false)}
      />

      <FixDangerModal
        open={fixDangerOpen}
        level={game.dangerLevel}
        onClose={() => setFixDangerOpen(false)}
        onApply={applyDangerFix}
      />

      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />

      <InstallModal
        open={installOpen}
        promptAvailable={Boolean(installPrompt)}
        onClose={() => setInstallOpen(false)}
        onInstall={install}
      />
    </div>
  )
}
