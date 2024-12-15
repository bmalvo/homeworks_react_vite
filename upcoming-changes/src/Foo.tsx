import { Bar } from "./Bar";

export type FooProps = {

    value: number;
    toggle: boolean;
}

const heavyCalculations = (flag: boolean) => {

    if (flag) return 999;
    return Math.round(Math.random() * 100000000)
}

export const Foo = ({ value, toggle }: FooProps) => {
    'use no memo'
    
    const random =  heavyCalculations(toggle);

    return <>
        <div>
            <h1>{value}</h1>
            <h2>{random}</h2>
            {/* <h3>{ toggle}</h3> */}
            <Bar />
        </div>
    </>
}