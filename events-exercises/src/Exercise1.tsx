const Exercise1 = () => {
    const handleClick = () => {
        console.log('Clicked!');
    }

    const handleHover = () => {
        console.log('Hovered!');
    }

    const handleMouseLeave = () => {
        console.log('Left!');
    }

    return (
        <>
            <button onClick={handleClick}>Click me</button>
            <button onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>Hover me</button>
        </>
    )
}

export { Exercise1 }
