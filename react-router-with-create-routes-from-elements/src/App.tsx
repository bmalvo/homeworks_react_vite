//  1- classic way

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { MainLayout } from "./MainLayout"
import { Account } from "./Account"
import { About } from "./About"

export const App = () => {

  return <>
    <BrowserRouter >
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='account' element={<Account />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Navigate to='account' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}