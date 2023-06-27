import { rest } from 'msw'

export const handlers = [
    rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                { id: 1, name: "Achyut Timsina" },
                { id: 2, name: "Kiran Rana" },
                { id: 3, name: "Pratik Bhusal" }
            ])
        )
    })
]