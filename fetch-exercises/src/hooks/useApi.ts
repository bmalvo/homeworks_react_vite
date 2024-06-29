import { useState } from "react"

const API_BASE = 'http://localhost:3000/';

export const useApi = () => {

    // const [data, setData] = useState<T>();
    const [loading, setLoadning] = useState<boolean>(false);
    const [error, setError] = useState('');

    const call = async <R>(url: string, method: 'GET' | 'DELETE') => {
        setLoadning(true);
        try {
            const response = await fetch(`${API_BASE}${url}`, {method});

            if (response.ok) {
                const data: R = await response.json();
                return data;
            } else {
                const apiError: string = await response.text();
                setError(apiError);
            }


        } catch (e) {
            setError('Error ocurred')  
        } finally {
            setLoadning(false);
        }
    }

    const apiDelete = async <R>(url: string) => {
        return await call<R>(url, 'DELETE');
    }

    const apiGet = async <R>(url: string) => {
        return await call<R>(url, 'GET');
    }

    return {
        apiGet, apiDelete, loading, error
    }
}