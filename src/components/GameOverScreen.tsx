'use client';

import { HandThumbUp } from './HandThumbUp';
import styles from './GameOverScreen.module.css';

interface GameOverScreenProps {
  earnedAmount: string;
  onRestart: () => void;
}

export function GameOverScreen({ earnedAmount, onRestart }: GameOverScreenProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <HandThumbUp className={styles.hand} />
        <div className={styles.resultBlock}>
          <p className={styles.resultLabel}>Total score:</p>
          <h1 className={styles.resultAmount}>{earnedAmount} earned</h1>
        </div>
        <button className={styles.restartButton} onClick={onRestart} type="button">
          Try again
        </button>
      </div>
    </div>
  );
}
