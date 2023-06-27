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
        const btnElem = screen.getByRole('button', { name: "Increase" })

        await act(() => { userEvent.click(btnElem) })
        await act(() => { userEvent.click(btnElem) })
        const countElem = screen.getByRole('heading')
        expect(countElem).toHaveTextContent('2')
    })

    test('renders count of 10 after clicking set button', async () => {
        render(<Counter />)
        const amtInput = screen.getByRole('spinbutton')
        const increaseBtn = screen.getByRole('button', { name: "Increase" })
        const setBtn = screen.getByRole('button', { name: 'Set' })

        const countElem = screen.getByRole('heading')

        // type works with keyboard input
        await act(() => userEvent.type(amtInput, "10"))
        expect(amtInput).toHaveValue(10)

        await act(() => userEvent.click(setBtn))
        expect(countElem).toHaveTextContent(10)

        await act(() => userEvent.click(increaseBtn))
        expect(countElem).toHaveTextContent(11)
    })

    test('elements are focused in the right order', async () => {
        render(<Counter />)
        const amtInput = screen.getByRole('spinbutton')
        const increaseBtn = screen.getByRole('button', { name: "Increase" })
        const setBtn = screen.getByRole('button', { name: 'Set' })

        await userEvent.tab()
        expect(increaseBtn).toHaveFocus()
        await userEvent.tab()
        expect(amtInput).toHaveFocus()
        await userEvent.tab()
        expect(setBtn).toHaveFocus()
    })
})