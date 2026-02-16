'use client';

import type { AnswerState } from '@/types/game';

import styles from './AnswerButton.module.css';

interface AnswerButtonProps {
  label: string;
  text: string;
  onClick: () => void;
  state: AnswerState;
  disabled: boolean;
}

export function AnswerButton({ label, text, onClick, state, disabled }: AnswerButtonProps) {
  const stateClass = state !== 'idle' ? (styles[state] ?? '') : '';

  return (
    <button
      className={`${styles.answer} ${stateClass}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      <svg className={styles.hexBg} viewBox="0 0 405 56" preserveAspectRatio="none">
        <polygon points="28,1 377,1 404,28 377,55 28,55 1,28" className={styles.hexShape} />
      </svg>
      <span className={styles.content}>
        <span className={styles.label}>{label}</span>
        <span className={styles.text}>{text}</span>
      </span>
    </button>
  );
}
