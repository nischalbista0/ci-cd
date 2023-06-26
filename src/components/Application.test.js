import { render, screen } from "@testing-library/react"
import { Application } from "./Application"

describe('application', () => {
    test('application renders correctly', () => {
        render(<Application />)

        const pageHeading = screen.getByRole('heading', {
            // name: 'Job application form'
            level: 1
        })
        expect(pageHeading).toBeInTheDocument()

        const sectionHeading = screen.getByRole('heading', {
            // name: 'Section 1'
            level: 2
        })
        expect(sectionHeading).toBeInTheDocument()

        const nameElement = screen.getByRole('textbox', {
            name: 'Name'
        })
        expect(nameElement).toBeInTheDocument()

        const bioElem = screen.getByRole('textbox', {
            name: 'Bio'
        })
        expect(bioElem).toBeInTheDocument()
        // const pElem = screen.getByText('are mandatory', { exact: false })
        // const pElem = screen.getByText(/all fields are mandatory/i)
        const pElem = screen.getByText((content) => content.startsWith('All'))
        expect(pElem).toBeInTheDocument()
    })
})
