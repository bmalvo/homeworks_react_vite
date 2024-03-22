import { GrandparentProps } from "./types"

const Child = ({value}:GrandparentProps) => {
    return <h1>I got a value { value }!</h1>
}

export { Child }
