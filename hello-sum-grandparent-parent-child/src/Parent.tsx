import { Child } from "./Child"
import { GrandparentProps } from "./types"

const Parent = ({value}:GrandparentProps) => {
    return <Child value={value} />
}

export { Parent }
