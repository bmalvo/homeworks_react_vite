import { createFileRoute } from '@tanstack/react-router'

const Dolor = () => <p>Paszek pies gruby jest.</p>

export const Route = createFileRoute('/dolor')({
  component: Dolor,
})
