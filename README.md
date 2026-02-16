# Who Wants to Be a Millionaire? 🎮

Quiz game built with Next.js, TypeScript, and CSS Modules.

## Demo

[Live on Vercel] (https://goodly-nu.vercel.app/)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** CSS Modules (no CSS frameworks)
- **Linting:** ESLint (strict-type-checked + nextjs + react recommended)
- **Formatting:** Prettier + import sorting plugin

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
git clone https://github.com/markivantsiv55/goodly
cd goodly
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Available Scripts

| Command              | Description                          |
| -------------------- | ------------------------------------ |
| `npm run dev`        | Start development server             |
| `npm run build`      | Build for production                 |
| `npm run start`      | Start production server              |
| `npm run lint`       | Run ESLint                           |
| `npm run lint:fix`   | Run ESLint with auto-fix             |
| `npm run format`     | Format code with Prettier            |
| `npm run format:check` | Check formatting without changes   |

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── globals.css       # Global styles & CSS variables
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── AnswerButton.tsx  # Hexagonal answer option
│   ├── Game.tsx          # Main game controller
│   ├── GameOverScreen.tsx# Final score screen
│   ├── HandThumbUp.tsx   # SVG illustration
│   ├── MoneyLadder.tsx   # Prize ladder sidebar
│   ├── QuestionScreen.tsx# Question + answers layout
│   └── StartScreen.tsx   # Welcome screen
├── config/
│   └── gameConfig.json   # Game configuration (questions, money ladder)
├── hooks/
│   └── useGame.ts        # Game state management hook
└── types/
    └── game.ts           # TypeScript interfaces
```

## Game Configuration

The game is fully configurable via `src/config/gameConfig.json`:

```json
{
  "questions": [
    {
      "id": 1,
      "question": "Your question text",
      "answers": [
        { "id": "1a", "text": "Option A", "isCorrect": false },
        { "id": "1b", "text": "Option B", "isCorrect": true },
        { "id": "1c", "text": "Option C", "isCorrect": false },
        { "id": "1d", "text": "Option D", "isCorrect": false }
      ]
    }
  ],
  "moneyLadder": [
    { "id": 1, "amount": "$500" },
    { "id": 2, "amount": "$1,000" }
  ]
}
```

The config is extensible:
- Add or remove questions
- Use more or fewer answer options per question
- Support multiple correct answers
- Customize the money ladder amounts

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repository at [vercel.com](https://vercel.com).


