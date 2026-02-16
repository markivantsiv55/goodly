'use client';

import type { MoneyStep } from '@/types/game';

import styles from './MoneyLadder.module.css';

interface MoneyLadderProps {
  steps: MoneyStep[];
  currentStepIndex: number;
  onClose?: () => void;
}

export function MoneyLadder({ steps, currentStepIndex, onClose }: MoneyLadderProps) {
  return (
    <div className={styles.ladder}>
      {onClose && (
        <button className={styles.closeButton} onClick={onClose} type="button" aria-label="Close">
          ✕
        </button>
      )}
      {[...steps].reverse().map((step, reverseIdx) => {
        const originalIndex = steps.length - 1 - reverseIdx;
        const isActive = originalIndex === currentStepIndex;
        const isPassed = originalIndex < currentStepIndex;

        let className = styles.step;
        if (isActive) className += ` ${styles.active}`;
        if (isPassed) className += ` ${styles.passed}`;

        return (
          <div key={step.id} className={className}>
            <svg className={styles.hexBg} viewBox="0 0 240 36" preserveAspectRatio="none">
              <polygon points="18,1 222,1 239,18 222,35 18,35 1,18" className={styles.hexShape} />
            </svg>
            <span className={styles.stepAmount}>{step.amount}</span>
          </div>
        );
      })}
    </div>
  );
}
