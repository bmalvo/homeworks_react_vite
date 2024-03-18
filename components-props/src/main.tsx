import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Hello } from './Hello'
import { ManyValues } from './ManyValues'
import { Foo } from './Foo'
import {Parent} from './Parent'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Hello name='Patryk' />
    <ManyValues first={1} second={2} third={3} fourth={4} fifth={5} sixth={6} />
    <Foo elements={[ 
      {id:1, value: 'Lorem'},
      {id:2, value: 'Chlorem'},
      {id:3, value: 'Golem'},
    ]} />
    <Parent />
  </React.StrictMode>,
)
