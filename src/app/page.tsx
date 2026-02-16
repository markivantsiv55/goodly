import { Game } from '@/components/Game';
import type { GameConfig } from '@/types/game';

import gameConfig from '../config/gameConfig.json';

export default function HomePage() {
  return <Game config={gameConfig as GameConfig} />;
}


