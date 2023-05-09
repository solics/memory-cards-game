import { act, render, screen } from '@testing-library/react'
import Button from '../../components/button'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'

const handleClick = jest.fn()

const renderComponent = () => {
  return render(<Button value="Click" onClick={handleClick} />)
}

describe('Component: Button', () => {
  it('Should render component', () => {
    renderComponent()
    expect(screen.getByText('Click')).toBeInTheDocument()
  })

  it('HandleClick should be called once', async () => {
    renderComponent()
    const btn = screen.getByRole('button', { name: 'Click' })
    expect(handleClick).not.toHaveBeenCalled()
    await act(() => userEvent.click(btn))
    expect(handleClick).toHaveBeenCalledOnce()
  })
})
