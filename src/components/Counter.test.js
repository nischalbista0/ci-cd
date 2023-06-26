import { render, screen } from "@testing-library/react"
import Counter from "./Counter"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"

describe('Counter test', () => {
    test('renders correctly', () => {
        render(<Counter />)
        const countElem = screen.getByRole('heading')
        expect(countElem).toBeInTheDocument()
        expect(countElem).toHaveTextContent('0')
        const btnElem = screen.getByRole('button', {
            name: 'Increase'
        })
        expect(btnElem).toBeInTheDocument()
    })
    test('renders count 1 after clicking the button', async () => {
        render(<Counter />)
        const btnElem = screen.getByRole('button', {
            name: 'Increase'
        })
        await act(() => {
            userEvent.click(btnElem)
        })
        const countElem = screen.getByRole('heading')
        expect(countElem).toHaveTextContent("1")
    })
    test('renders count 2 after clicking twice', async () => {
        render(<Counter />)
        const btnElem = screen.getByRole('button')

        await act(() => { userEvent.click(btnElem) })
        await act(() => { userEvent.click(btnElem) })
        const countElem = screen.getByRole('heading')
        expect(countElem).toHaveTextContent('2')
    })
})