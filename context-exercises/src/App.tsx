import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import { Footer } from "./components/Footer"
// import { Header } from "./components/Header"
// import { ConfigContext } from "./context/ConfigContext"
import { AllSeries } from "./components/AllSeries"


//task 1
// export const App = () => {

//   return <main>
//     <ConfigContext.Provider value={{
//       colors: {
//         primary: '#f1d808',
//         secondary: '#7b0680'
//       }
//     }}>
//     <Header />
//     <Footer />
//     </ConfigContext.Provider>
//      <ConfigContext.Provider value={{
//       colors: {
//         primary: '#2def39',
//         secondary: '#fe1916'
//       }
//     }}>
//     <Header />
//     <Footer />
//     </ConfigContext.Provider>
//   </main>
// }

// taks 2 

const queryClient = new QueryClient();

export const App = () => {

  return <QueryClientProvider client={queryClient}>
    <AllSeries />
  </QueryClientProvider>
}