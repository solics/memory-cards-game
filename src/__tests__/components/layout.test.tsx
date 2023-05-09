import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing'
import { AppContextProvider } from '../../context/app'
import Layout from '../../components/layout'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}))

const appContextValue = {
  characters: [],
  loading: false,
  setState: jest.fn(),
  setCharacters: jest.fn(),
  setLoading: jest.fn(),
}

const renderComponent = () => {
  return render(
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MockedProvider>
              <AppContextProvider value={appContextValue}>
                <Layout>
                  <div>Contenido de Layout</div>
                </Layout>
              </AppContextProvider>
            </MockedProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

describe('Component: Layout', () => {
  it('Should render the component and the passed children', () => {
    renderComponent()
    expect(screen.getByText('Juego de memoria')).toBeInTheDocument()
    expect(screen.getByText('Contenido de Layout')).toBeInTheDocument()
  })
})
