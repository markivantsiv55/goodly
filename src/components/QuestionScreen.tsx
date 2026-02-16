'use client';

import { useState } from 'react';

import type { AnswerState, MoneyStep, Question } from '@/types/game';

import { AnswerButton } from './AnswerButton';
import { MoneyLadder } from './MoneyLadder';
import styles from './QuestionScreen.module.css';

interface QuestionScreenProps {
  question: Question;
  currentStepIndex: number;
  moneyLadder: MoneyStep[];
  selectedAnswerId: string | null;
  answerState: AnswerState;
  onSelectAnswer: (answerId: string) => void;
}

const ANSWER_LABELS = ['A', 'B', 'C', 'D'];

export function QuestionScreen({
  question,
  currentStepIndex,
  moneyLadder,
  selectedAnswerId,
  answerState,
  onSelectAnswer,
}: QuestionScreenProps) {
  const [showLadder, setShowLadder] = useState(false);

  const getAnswerState = (answerId: string): AnswerState => {
    if (answerState === 'idle') return 'idle';
    if (answerId !== selectedAnswerId) {
      if (answerState === 'wrong') {
        const correctAnswer = question.answers.find((a) => a.isCorrect);
        if (correctAnswer?.id === answerId) {
          return 'correct';
        }
      }
      return 'idle';
    }
    return answerState;
  };

  return (
    <div className={styles.container}>
      {/* Mobile menu button */}
      <button
        className={styles.menuButton}
        onClick={() => setShowLadder(true)}
        type="button"
        aria-label="Show money ladder"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="#1C1C21" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <div className={styles.gameArea}>
        <div className={styles.questionSection}>
          <div className={styles.questionBlock}>
            <h2 className={styles.questionText}>{question.question}</h2>
          </div>
          <div className={styles.answersGrid}>
            {question.answers.map((answer, idx) => (
              <AnswerButton
                key={answer.id}
                label={ANSWER_LABELS[idx] ?? ''}
                text={answer.text}
                onClick={() => onSelectAnswer(answer.id)}
                state={getAnswerState(answer.id)}
                disabled={answerState !== 'idle'}
              />
            ))}
          </div>
        </div>

        {/* Desktop ladder (always visible) */}
        <aside className={styles.ladderDesktop}>
          <MoneyLadder steps={moneyLadder} currentStepIndex={currentStepIndex} />
        </aside>
      </div>

      {/* Mobile ladder (overlay) */}
      {showLadder && (
        <div className={styles.ladderMobile}>
          <MoneyLadder
            steps={moneyLadder}
            currentStepIndex={currentStepIndex}
            onClose={() => setShowLadder(false)}
          />
        </div>
      )}
    </div>
  );
}
