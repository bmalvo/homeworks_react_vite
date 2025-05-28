import { act, renderHook } from "@testing-library/react";
import { useUsers } from "./useUsers"
import { SingleUser } from "../types";
import * as apiHook from './useApi';

describe('useUsers', () => {
    
    it('verify that initial users and adults are empty', () => {

        const { result } = renderHook(() => useUsers());
        
        expect(result.current.adults).toHaveLength(0);
        expect(result.current.users).toHaveLength(0);
    })

    it('verify that initial users and adults are empty', async() => {

        const returnedUsers: SingleUser[] = [
            { id: '1', name: 'Aaa', age: 10 },
            { id: '2', name: 'Bbb', age: 20 },
            { id: '3', name: 'Ccc', age: 16 },
            { id: '4', name: 'Ddd', age: 43 }
        ]

        vi.spyOn(apiHook, 'useApi').mockReturnValueOnce({

            get: async<R>() => new Promise<R>(resolve => resolve(returnedUsers as R))
        })

        const { result } = renderHook(() => useUsers());

        await act(async () => {
            
           await result.current.getUsers();
        });
        
        expect(result.current.adults).toHaveLength(2);
        expect(result.current.adults).toEqual([{ id: '2', name: 'Bbb', age: 20 },{ id: '4', name: 'Ddd', age: 43 }]);
        expect(result.current.users).toHaveLength(4);
    })
})