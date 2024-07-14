import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {BooksList} from './BooksList'

const queryClient = new QueryClient();

export const App = () => {

  return <>
    <QueryClientProvider client={queryClient}>
      <BooksList />
    </QueryClientProvider>
  </>
}