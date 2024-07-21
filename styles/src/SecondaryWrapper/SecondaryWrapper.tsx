import { ReactNode } from "react"
import './SecondaryWrapper.scss'

type SecondaryWrapperProps = {

    children: ReactNode
}

export const SecondaryWrapper = ({children}: SecondaryWrapperProps) => {

    return (
        <div className="wrapper secondary">
            {children}
        </div>
    )
}