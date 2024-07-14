import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BookList } from "./BookList"

const queryClient = new QueryClient();

export const App = () => {

  return <>
    <QueryClientProvider client={queryClient}>
      <BookList />
    </QueryClientProvider>
  </>
}