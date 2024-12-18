export type User = {

    id: number;
    name: string;
}

export const users: User[] = [

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

export const getSingleUserById = (id: number): Promise<User | null> => {

    return new Promise(resolve => {

        setTimeout(() => {
            
            const user = users.find(user => (user.id === id))
            resolve(user || null);
        }, 1000);
    })
}