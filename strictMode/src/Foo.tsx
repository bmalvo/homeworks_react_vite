const arr = [1, 2, 3, 5];


// bad code! component can't modify const beyond his scope
export const Foo = () => {
    arr.push(6);

    return <ul>
        {arr.map(num => <li key={num}>{num}</li>)}
    </ul>
}
