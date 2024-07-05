import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { TodoApp } from "./TodoApp"

export const App = () => {

  const qClient = new QueryClient();

  return (
    <QueryClientProvider client={qClient}>
      <TodoApp />
    </QueryClientProvider>
  )
}