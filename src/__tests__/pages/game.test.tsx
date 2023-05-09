import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing'
import { AppContextProvider } from '../../context/app'
import { mockedCharacters } from '../data'
import { act } from 'react-dom/test-utils'
import { delay } from '../../utils/helpers'
import Game from '../../pages/Game'

const appContextValue = {
  characters: mockedCharacters,
  loading: false,
  setState: jest.fn(),
  setCharacters: jest.fn(),
  setLoading: jest.fn(),
}

const renderComponent = () => {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route
          path="/"
          element={
            <MockedProvider>
              <AppContextProvider value={appContextValue}>
                <Game />
              </AppContextProvider>
            </MockedProvider>
          }
        />
      </Routes>
    </MemoryRouter>
  )
}

describe('Page: Game', () => {
  it('Should render component and change Turnos & Aciertos numbers', async () => {
    await renderComponent()
    expect(screen.getByText('Turnos: 0')).toBeInTheDocument()
    expect(screen.getByText('Aciertos: 0')).toBeInTheDocument()

    expect(screen.getAllByText('Cornvelious Daniel')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Alien')[0]).toBeInTheDocument()

    await act(() => {
      userEvent.click(screen.getAllByText('Cornvelious Daniel')[0])
      userEvent.click(screen.getAllByText('Cornvelious Daniel')[1])
    })
    await delay(2000)
    expect(screen.getByText('Aciertos: 1')).toBeInTheDocument()
    expect(screen.getByText('Turnos: 1')).toBeInTheDocument()
  })
})
