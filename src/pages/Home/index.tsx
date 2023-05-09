import { useNavigate } from 'react-router-dom'
import { CharacterI, useAppContext } from '../../context/app'
import Button from '../../components/button'
import GameCard from '../../components/game-card'
import Loader from '../../components/loader'

export const Home = () => {
  const { characters, loading } = useAppContext()
  const nav = useNavigate()

  const renderCharacters = () =>
    characters.map((character: CharacterI) => (
      <GameCard key={character.key} character={character} isHome />
    ))

  return (
    <div className="home">
      <p className="home__header">Personajes</p>
      <section className="home__content">
        {loading ? (
          <Loader />
        ) : (
          <div className="characters">{renderCharacters()}</div>
        )}
      </section>
      <section className="home__buttons">
        <Button value="Jugar" onClick={() => nav('/board')} />
      </section>
    </div>
  )
}

export default Home
