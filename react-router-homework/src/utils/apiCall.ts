export const apiCall = async<R>(url: string) => {
    
    const baseUrl = 'http://localhost:3000';

    const response = await fetch(`${baseUrl}/${url}`);
    
    return response.json() as Promise<R>
}