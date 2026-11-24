import type { DangerAnswer } from '../types'
import { SkullIcon } from './Icons'

interface DangerCheckProps {
  level: number
  previousLevel: number
  answer: DangerAnswer | null
  answered: boolean
  onAnswer: (answer: DangerAnswer) => void
}

export function DangerCheck({
  level,
  previousLevel,
  answer,
  answered,
  onAnswer,
}: DangerCheckProps) {
  const result = answered
    ? answer === 'yes'
      ? level > previousLevel
        ? `Danger increased to ${level}.`
        : 'Danger is already at the maximum (5).'
      : `Danger stayed at ${level}.`
    : null

  return (
    <section className="danger-check" aria-labelledby="danger-check-title">
      <div className="danger-check-head">
        <span className="danger-check-icon">
          <SkullIcon size={22} />
        </span>
        <div>
          <h2 id="danger-check-title">Did the Danger Level increase?</h2>
          <p>Move the marker on the floor mat first, then answer based on the new space.</p>
        </div>
      </div>

      <div className="danger-check-readout">
        <span>Current Danger Level</span>
        <strong>{level}</strong>
      </div>

      <div className="danger-choices">
        <button
          type="button"
          className={`danger-choice${answer === 'yes' ? ' selected' : ''}`}
          onClick={() => onAnswer('yes')}
          aria-pressed={answer === 'yes'}
        >
          <span>Yes</span>
          <small>Increase by 1</small>
        </button>
        <button
          type="button"
          className={`danger-choice${answer === 'no' ? ' selected' : ''}`}
          onClick={() => onAnswer('no')}
          aria-pressed={answer === 'no'}
        >
          <span>No</span>
          <small>It stayed the same</small>
        </button>
      </div>

      {result ? <p className="danger-result">{result}</p> : null}
      {!answered ? <p className="danger-hint">Answer to enable End Turn.</p> : null}
      {level >= 5 ? (
        <p className="danger-warning">
          Danger is at 5. Keep an eye on the end of the danger track.
        </p>
      ) : null}
    </section>
  )
}
