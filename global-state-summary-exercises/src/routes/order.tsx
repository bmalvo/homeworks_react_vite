import { createFileRoute } from '@tanstack/react-router'
import { Order } from '../pages/order'

export const Route = createFileRoute('/order')({
  component: Order,
})
