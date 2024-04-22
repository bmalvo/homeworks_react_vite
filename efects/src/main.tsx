import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { IncorrectEffect } from './IncorrectEffect.tsx'
import { Correct } from './Correct.tsx'
import { Complicated } from './Compicated.tsx'
import { ClassLifecycle } from './ClassLifecycle.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <App />
  <IncorrectEffect />
  <Correct />
  <Complicated />
  <ClassLifecycle />
  </React.StrictMode>,
)
