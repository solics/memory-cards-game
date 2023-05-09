import { CharacterI } from '../../../context/app';

interface GameCardFrontI {
  character: CharacterI;
}

const GameCardFront = ({ character }: GameCardFrontI) => {
  return (
    <article className="game-card-front" key={character.key}>
      <img src={character.image} alt="img" />
      <span className="game-card-front__name">{character.name}</span>
      <br />
      <span className="game-card-front__species">{character.species}</span>
    </article>
  );
};

export default GameCardFront;
