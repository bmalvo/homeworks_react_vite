import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { IncorrectEffect } from './IncorrectEffect.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  // <App />
  <IncorrectEffect />
  // </React.StrictMode>,
)
