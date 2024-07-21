import { ReactNode } from "react"
import './Wrapper.scss'

type WrapperProps = {

    children: ReactNode
}

export const Wrapper = ({children}: WrapperProps) => {

    return (
        <div className="wrapper">
            {children}
        </div>
    )
}