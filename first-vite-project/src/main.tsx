import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const first = 33;
const second = 66;

const myFunc = (name: string) => {
  return <h1> My name is {name}!</h1>
};

const yourName = prompt('What is your name?');

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <div>
    
  <h1>Sum elements first and second: {first + second}</h1>
    <div>{myFunc('Patryk')}</div>
    <h1>Welcome { yourName }!</h1>
  </div>
)
