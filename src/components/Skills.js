import React, { useEffect, useState } from 'react'

export default function Skills({ skills }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true)
        }, 500)
    }, [])
    return (
        <div>
            <ul>
                {
                    skills.map(skill => <li key={skill}>{skill}</li>)
                }
            </ul>
            {isLoggedIn ? (
                <button>start learning</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>login</button>
            )}
        </div>
    )
}
