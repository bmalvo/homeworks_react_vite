import { createLazyFileRoute } from '@tanstack/react-router'
import { IP } from '../components/IP'


export const Route = createLazyFileRoute('/ip')({
    component: IP,
    
})
