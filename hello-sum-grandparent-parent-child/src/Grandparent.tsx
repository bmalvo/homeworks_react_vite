import { Parent } from "./Parent"
import { GrandparentProps } from "./types"

const Grandparent = ({value}:GrandparentProps) => {
    return <Parent value={ value } />
}

export { Grandparent }
