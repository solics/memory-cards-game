import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Home from '../../pages/Home'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing'
import { AppContextProvider } from '../../context/app'

const appContextValue = {
  characters: [],
  loading: true,
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
                <Home />
              </AppContextProvider>
            </MockedProvider>
          }
        />
      </Routes>
    </MemoryRouter>
  )
}

describe('Page: Home', () => {
  it('Should render component', () => {
    renderComponent()
    expect(screen.getByText('Personajes')).toBeInTheDocument()
  })

  it('Should show button Jugar', async () => {
    renderComponent()
    expect(screen.getByRole('button', { name: 'Jugar' }))
  })
})
