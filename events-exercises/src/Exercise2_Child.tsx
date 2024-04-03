type Props = {
    callback: (fromWho: string) => void;
}

const Exercise2Child = ({ callback }: Props) => {
    const handleClick = () => {
        callback('Child!')
    }

    return <button onClick={handleClick}>Click me</button>
}

export { Exercise2Child }
