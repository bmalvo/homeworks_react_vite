import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { Foo } from './Foo.tsx'
import { IncorrectCounterParent } from './IncorrectCounterParent.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App />
    <Foo /> */}
    <IncorrectCounterParent />
  </React.StrictMode>,
)
