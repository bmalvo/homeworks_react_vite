import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/success')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /success!'
}
