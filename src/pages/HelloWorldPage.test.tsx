import { render, screen } from '@testing-library/react'
import { HelloWorldPage } from './HelloWorldPage'

describe('HelloWorldPage', () => {
  it('renders Hello World', () => {
    render(<HelloWorldPage />)

    expect(
      screen.getByRole('heading', { name: /hello world/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/project discovery app/i)).toBeInTheDocument()
  })
})
