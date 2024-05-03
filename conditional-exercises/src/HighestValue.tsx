type NumbersProps = {
    a: number;
    b: number;
    c: number;
}

export const HighestValue = ({ a, b, c }: NumbersProps) => {
    
    const highest = Math.max(a, b, c)
    
    return <h1>The highest number is: { highest }</h1>
}
