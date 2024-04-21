import { useState } from "react"

export const Correct = () => {
    const [people, setPeople] = useState<string[]>(['Tom', 'Franc']);
    
    const firstPerson = people[0];


    const addPerson = () => {
        setPeople(prevPeople => [`Lorem Ipsum ${Math.round(Math.random() * 100000)}`, ...prevPeople])
    }

    return <>
        <button onClick={addPerson}> Add person </ button>
        <p>First person is: { firstPerson }</p>
        <ul>
            {people.map((person, index) => <li key={index}>{person}</li>)}
        </ul>
        </>
}
