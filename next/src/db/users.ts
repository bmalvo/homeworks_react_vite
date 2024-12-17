type User = {

    id: number;
    name: string;
}

const users: User[] = [

    { id: 1, name: 'stefka' },
    { id: 2, name: 'brydzia' }, 
    { id: 3, name: 'ninja' },
    { id: 4, name: 'bubu' },
    {id: 5, name: 'drapek'}
    
]

export const getAllUsers = (): Promise<User[]> => {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve(users);
        },1000)
    })
}