type SingleElement = {
    id: string;
    title: string;
}

const Exercise3 = () => {
    const elements: SingleElement[] = [
    {id:'a', title: 'lorem'},
    {id:'b', title: 'chlorem'},
    {id:'c', title: 'ciupaga'},
    {id:'d', title: 'max'},
    ]

    const handleclick = (clickedId: string) => {
        console.log(`Element ${clickedId} was clicked!`)
    }
    
    return <ul>
        {elements.map(element => <li key={element.id}>{element.title}
        <button onClick={() => handleclick(element.id)}>click li!</button></li>)}
    </ul>
}

export { Exercise3 }
