import React from 'react';
import BACK_IMAGE from '../../../assets/images/back-image.png';

const GameCardBack = (props: React.HTMLAttributes<HTMLElement>) => {
  return (
    <article {...props} className="game-card-back">
      <img src={BACK_IMAGE} alt="back-image" />
    </article>
  );
};

export default GameCardBack;
