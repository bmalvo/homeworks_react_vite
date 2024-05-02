type UserData = {
    name?: string;
    lastname?: string;
    age?: number;
}

type AccessValidatorProps = {
    user?: UserData;
}

export const AccessValidator = ({ user }: AccessValidatorProps) => {
    
    const getContent = (user?: UserData) => {
   
        if (!user) return 'Hello unknown!'
        const { name, lastname, age} = user;
        if (!name || !lastname) return 'I know You but not at all...'
        if (!age) return `Hi ${name} ${lastname}, I don't know if I can access You here...`
        
        return `Hi ${name} ${lastname}, welcome in ${age >= 18 ? 'full' : 'partial'} version.`
    }

    return <h1>{ getContent (user)}</h1>
}