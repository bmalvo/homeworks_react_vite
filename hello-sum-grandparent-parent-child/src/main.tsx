import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Hello } from './Hello'
import { Sum } from './Sum'
import { Grandparent } from './Grandparent'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Hello who='Patryk' />
    <Sum a={ 2 } b={ 3 } />
    <Grandparent value={ 7 } />
  </React.StrictMode>,
)
