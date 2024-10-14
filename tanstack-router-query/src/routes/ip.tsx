import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/ip')({

    loader: async () => {
        const response = await fetch('https://api.ipify.org?format=json');
        return response.json() as Promise<{ ip: string }>
    },
    beforeLoad: ({ context }) => {
        
        if (!context.allowed) {
            
            throw redirect({
                to: '/'
            })
        }

      console.log(context)
    }
})
