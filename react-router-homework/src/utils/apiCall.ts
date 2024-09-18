export const apiCall = (url: string) => {
    
    const baseUrl = 'http://localhost:3000';

    return fetch(`${baseUrl}/${url}`);
}