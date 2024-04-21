import { useEffect, useState } from "react"

export const IncorrectEffect = () => {
    const [people, setPeople] = useState<string[]>(['Tom', 'Franc']);
    const [firstPerson, setFirstPerson] = useState(people[0]);

    useEffect(() => {
        setFirstPerson(people[0])
    }, [people])

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
