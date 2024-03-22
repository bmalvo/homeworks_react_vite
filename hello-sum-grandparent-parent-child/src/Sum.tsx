import { Result } from "./Result";
import { SumProps } from "./types";

const Sum = ({ a, b }: SumProps) => {
    const result = a + b;
    return <Result sum={ result } />
    
}

export { Sum }
