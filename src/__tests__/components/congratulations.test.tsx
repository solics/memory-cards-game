import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Congratulations from '../../components/congratulations'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}))

const renderComponent = () => {
  return render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Congratulations turns={10} />} />
      </Routes>
    </BrowserRouter>
  )
}

describe('Component: Congratulations', () => {
  it('Should render component with the indicated number of turns', () => {
    renderComponent()
    expect(screen.getByText('Felicitationes!')).toBeInTheDocument()
    expect(
      screen.getByText('Terminaste el juego en 10 turnos')
    ).toBeInTheDocument()
  })
})
