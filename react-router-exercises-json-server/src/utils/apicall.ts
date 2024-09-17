type ApiConfig<T = {}> = {

    method?: 'GET' | 'POST',
    body?: T
}

export const apicall = <T>(url: string, options?: ApiConfig<T>) => {

    const baseUrl = 'http://localhost:3000'

    return fetch(`${baseUrl}/${url}`, {
        method: options?.method || 'GET',
        body: options?.body ? JSON.stringify(options.body) : undefined
    })
}