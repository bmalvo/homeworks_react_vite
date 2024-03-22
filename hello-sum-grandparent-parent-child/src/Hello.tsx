import { HelloProps } from "./types";


const Hello = ({who}:HelloProps) => {
    
    return (
        <h1>Hello { who }!</h1>
    )
}

export { Hello }
