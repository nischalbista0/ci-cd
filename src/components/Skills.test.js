import { render, screen } from "@testing-library/react"
import Skills from "./Skills"

describe('Skills', () => {
    const skills = ['plumbing', 'wiring', 'cleaning']
    test('renders correctly', () => {
        render(<Skills skills={skills} />)
        const listElem = screen.getByRole('list')
        expect(listElem).toBeInTheDocument()
    })
    test('renders a list of skills', () => {
        render(<Skills skills={skills} />)
        const listItemElems = screen.getAllByRole('listitem')
        expect(listItemElems).toHaveLength(3)
    })
    test('renders skills in correct order', () => {
        render(<Skills skills={skills} />)
        const listItemElems = screen.getAllByRole('listitem')
        expect(listItemElems[0]).toHaveTextContent('plumbing')
        expect(listItemElems[1]).toHaveTextContent('wiring')
    })

    test('renders login button', () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole("button", {
            name: "login"
        })
        expect(loginButton).toBeInTheDocument()
    })
    test('start learning is not present', () => {
        render(<Skills skills={skills} />)
        const learningButton = screen.queryByRole("button", {
            name: 'start learning'
        })
        //learningButton is null
        expect(learningButton).not.toBeInTheDocument()
    })

    test('start learning appears later', async () => {
        render(<Skills skills={skills} />)
        const learningButton = await screen.findByRole('button', {
            name: 'start learning'
        }, { timeout: 1001 })
        expect(learningButton).toBeInTheDocument()
    })
})
