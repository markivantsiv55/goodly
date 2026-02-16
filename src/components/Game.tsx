'use client';

import type { GameConfig } from '@/types/game';

import { useGame } from '@/hooks/useGame';

import { GameOverScreen } from './GameOverScreen';
import { QuestionScreen } from './QuestionScreen';
import { StartScreen } from './StartScreen';

interface GameProps {
  config: GameConfig;
}

export function Game({ config }: GameProps) {
  const { state, startGame, selectAnswer, restartGame, currentQuestion, moneyLadder } =
    useGame(config);

  switch (state.screen) {
    case 'start':
      return <StartScreen onStart={startGame} />;
    case 'question':
      return currentQuestion ? (
        <QuestionScreen
          question={currentQuestion}
          currentStepIndex={state.currentQuestionIndex}
          moneyLadder={moneyLadder}
          selectedAnswerId={state.selectedAnswerId}
          answerState={state.answerState}
          onSelectAnswer={selectAnswer}
        />
      ) : null;
    case 'gameOver':
      return <GameOverScreen earnedAmount={state.earnedAmount} onRestart={restartGame} />;
  }
}


