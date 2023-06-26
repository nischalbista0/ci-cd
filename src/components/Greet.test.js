import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test('renders hello', () => {
    render(<Greet />)
    const textElem = screen.getByText(/hello/i)
    // console.log(textElem)
    expect(textElem).toBeInTheDocument()
})

test('renders hello with name prop', () => {
    render(<Greet name={"Achyut"} />)
    const textElement = screen.getByText("Hello Achyut")
    // screen.debug()
    expect(textElement).toBeInTheDocument()
})