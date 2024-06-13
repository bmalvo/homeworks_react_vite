// version 1 :

import { ForwardedRef, forwardRef } from "react"

// import { MutableRefObject } from "react"

// type Props = {
//     passedRef: MutableRefObject<HTMLInputElement | null>;
// }

// export const Exercise1 = ({passedRef}: Props) => {

//     return <input type="text" ref={ passedRef} />
// }


export const Exercise1 = forwardRef((_, ref: ForwardedRef<HTMLInputElement | null>) => {

    return <input type="text" ref={ ref} />
})
