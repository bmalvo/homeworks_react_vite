import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {BooksList} from './BooksList'
import { BookStats } from "./BookStats";

const queryClient = new QueryClient();

export const App = () => {

  return <>
    <QueryClientProvider client={queryClient}>
      <BookStats />
      <BooksList />
    </QueryClientProvider>
  </>
}