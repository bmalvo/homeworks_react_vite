import { User } from "./types";


const Hello = ({who}:User) => {
    
    return (
        <h1>Hello { who }!</h1>
    )
}

export { Hello }
