import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Todos } from "./Todos";
import { MultipleTodos } from "./MultipleTodos";

const queryClient = new QueryClient();

export const App = () => {

  return <QueryClientProvider client={queryClient}>
    <Todos />
    <MultipleTodos />
  </QueryClientProvider>;
}