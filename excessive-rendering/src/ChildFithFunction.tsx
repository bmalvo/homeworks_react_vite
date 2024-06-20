import { memo, useEffect } from "react";

type ChildWithFunctionProps = {
    callback: (value: number) => void;
}

export const ChildWithFunction = memo (({callback}: ChildWithFunctionProps) => {
    console.log('render')

    useEffect(() => {
        callback(Math.round(Math.random() * 10));
    },[callback])

    // return <button onClick={callback}>Click me!</button>
    return <p>Lorem Ipsum</p>
})
