import { SingleUser } from "../types";

export const useUsers = () => {

    const getUsers = (): SingleUser[] => [
        {
            id: 1,
            name: 'Stefka',
            lastName: 'Marchewka',
            age: 12
        },
        {
            id: 2,
            name: 'Brydzia',
            lastName: 'Gizmo',
            age: 11
        },
        {
            id: 3,
            name: 'Ninja',
            lastName: 'Killer',
            age: 3
        }
    ];

    return {
        getUsers
    }
}
