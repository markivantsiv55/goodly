'use client';

import { useCallback, useState } from 'react';

import type { GameConfig, GameState } from '@/types/game';

const ANSWER_DELAY = 1500;

const INITIAL_STATE: GameState = {
  screen: 'start',
  currentQuestionIndex: 0,
  selectedAnswerId: null,
  answerState: 'idle',
  earnedAmount: '$0',
};

export function useGame(config: GameConfig) {
  const [state, setState] = useState<GameState>(INITIAL_STATE);

  const startGame = useCallback(() => {
    setState({
      ...INITIAL_STATE,
      screen: 'question',
    });
  }, []);

  const selectAnswer = useCallback(
    (answerId: string) => {
      if (state.answerState !== 'idle') return;

      const currentQuestion = config.questions[state.currentQuestionIndex];
      if (!currentQuestion) return;

      const selectedAnswer = currentQuestion.answers.find((a) => a.id === answerId);
      if (!selectedAnswer) return;

      setState((prev) => ({
        ...prev,
        selectedAnswerId: answerId,
        answerState: 'selected',
      }));

      setTimeout(() => {
        const isCorrect = selectedAnswer.isCorrect;

        if (isCorrect) {
          setState((prev) => ({
            ...prev,
            answerState: 'correct',
          }));

          setTimeout(() => {
            const nextIndex = state.currentQuestionIndex + 1;
            const currentStep = config.moneyLadder[state.currentQuestionIndex];
            const earnedAmount = currentStep?.amount ?? '$0';

            if (nextIndex >= config.questions.length) {
              setState((prev) => ({
                ...prev,
                screen: 'gameOver',
                earnedAmount,
                answerState: 'idle',
                selectedAnswerId: null,
              }));
            } else {
              setState((prev) => ({
                ...prev,
                currentQuestionIndex: nextIndex,
                selectedAnswerId: null,
                answerState: 'idle',
              }));
            }
          }, ANSWER_DELAY);
        } else {
          setState((prev) => ({
            ...prev,
            answerState: 'wrong',
          }));

          setTimeout(() => {
            const prevStep = config.moneyLadder[state.currentQuestionIndex - 1];
            const earnedAmount = prevStep?.amount ?? '$0';

            setState((prev) => ({
              ...prev,
              screen: 'gameOver',
              earnedAmount,
              answerState: 'idle',
              selectedAnswerId: null,
            }));
          }, ANSWER_DELAY);
        }
      }, ANSWER_DELAY);
    },
    [state.answerState, state.currentQuestionIndex, config],
  );

  const restartGame = useCallback(() => {
    setState(INITIAL_STATE);
  }, []);

  return {
    state,
    startGame,
    selectAnswer,
    restartGame,
    currentQuestion: config.questions[state.currentQuestionIndex],
    moneyLadder: config.moneyLadder,
  };
}

