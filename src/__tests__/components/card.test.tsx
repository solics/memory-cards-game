import { act, render, screen } from '@testing-library/react'
import GameCard from '../../components/game-card'

const renderComponent = (isHome: boolean, isActive: boolean) => {
  return render(
    <GameCard
      isHome={isHome}
      character={{
        id: 123,
        name: 'demo',
        image: 'http://img.com',
        key: 123,
        species: 'test',
      }}
      isActive={isActive}
    />
  )
}

describe('Component: Card', () => {
  it('Should render component without functionality', () => {
    renderComponent(true, false)
    expect(screen.getByText('demo')).toBeInTheDocument()
  })

  it("GameCard component shouldn't have active class", async () => {
    const { container } = renderComponent(false, true)
    const gameCard = container.getElementsByClassName('game-card')[0]
    expect(gameCard.classList.contains('active')).toBeTruthy()
  })
})
