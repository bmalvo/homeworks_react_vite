import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Hello } from './Hello'
import { Sum } from './Sum'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Hello who='Patryk' />
    <Sum a={2} b={3} />
  </React.StrictMode>,
)
