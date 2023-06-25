import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test('renders hello', () => {
    render(<Greet />)
    const textElem = screen.getByText(/hello/i)
    expect(textElem).toBeInTheDocument()
})