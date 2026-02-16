export interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export interface MoneyStep {
  id: number;
  amount: string;
}

export interface GameConfig {
  questions: Question[];
  moneyLadder: MoneyStep[];
}

export type GameScreen = 'start' | 'question' | 'gameOver';

export type AnswerState = 'idle' | 'selected' | 'correct' | 'wrong';

export interface GameState {
  screen: GameScreen;
  currentQuestionIndex: number;
  selectedAnswerId: string | null;
  answerState: AnswerState;
  earnedAmount: string;
}


