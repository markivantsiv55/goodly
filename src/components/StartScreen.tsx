'use client';

import { HandThumbUp } from './HandThumbUp';
import styles from './StartScreen.module.css';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className={styles.container}>
      <div className={styles.bgDecor} />
      <div className={styles.content}>
        <div className={styles.illustrationArea}>
          <HandThumbUp className={styles.hand} />
        </div>
        <div className={styles.textArea}>
          <h1 className={styles.title}>
            Who wants to be
            <br />a millionaire?
          </h1>
          <button className={styles.startButton} onClick={onStart} type="button">
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
