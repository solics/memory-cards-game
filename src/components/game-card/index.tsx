import React from 'react';
import GameCardFront from './game-card-front';
import GameCardBack from './game-card-back';
import { CharacterI } from '../../context/app';

interface GameCardI extends React.HTMLProps<HTMLElement> {
  character: CharacterI;
  isActive?: boolean;
  disabled?: boolean;
  isHome?: boolean;
}

const GameCard = ({ character, onClick, isActive, disabled, hidden, isHome }: GameCardI) => {
  return isHome ? (
    <div className="game-card active disable-events" onClick={onClick}>
      <div className="game-card-inner">
        <GameCardFront character={character} />
      </div>
    </div>
  ) : (
    <div className={`game-card${isActive ? ' active' : ''}${disabled ? ' disable-events' : ''}${hidden ? ' hidden' : ''}`} onClick={onClick}>
      <div className="game-card-inner">
        <GameCardFront character={character} />
        <GameCardBack onClick={onClick} />
      </div>
    </div>
  );
};

export default GameCard;
