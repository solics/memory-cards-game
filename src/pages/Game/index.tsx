import GameCard from '../../components/game-card'
import Loader from '../../components/loader'
import Congratulations from '../../components/congratulations'
import useGame from '../../hooks/useGame'
import { HITS_TO_WIN } from '../../constants/app'

export const Game = () => {
  const {
    board,
    hits,
    turns,
    isClickDisabled,
    isActive,
    handleCardClick,
    loading,
  } = useGame()

  const renderCards = () =>
    board.map((character, pos) => {
      const active = isActive(character, pos)
      const disabled = isClickDisabled(character) || active
      return (
        <GameCard
          key={character?.key}
          character={character}
          onClick={() => handleCardClick(character?.id, pos)}
          isActive={active}
          disabled={disabled}
          hidden={!character?.id}
        />
      )
    })

  return (
    <div className="game">
      {hits === HITS_TO_WIN ? (
        <Congratulations turns={turns} />
      ) : (
        <>
          <div className="game__header">
            <p>Aciertos: {hits}</p>
            <p>Turnos: {turns}</p>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <section className="game__board">{renderCards()}</section>
          )}
        </>
      )}
    </div>
  )
}

export default Game
