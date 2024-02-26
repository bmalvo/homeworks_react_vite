import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const first = 33;
const second = 66;



const color = () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
  return colors[Math.floor(Math.random() * 5)]
}

const myFunc = (name: string) => {
  return <h1> My name is {name}!</h1>
};

let backDivColor = ''

const promptColor = () => {
  const color = prompt('Give me a color: ');
  if (color?.length === 7) {
    return color;
  } else {
    backDivColor = 'black'
    return 'black';
  }
}

// const yourName = prompt('What is your name?');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>

      <p>First task:</p>
      <h1>Sum elements first and second: {first + second}</h1>
      <div>{myFunc('Patryk')}</div>
      {/* <h1>Welcome {yourName}!</h1> */}
      
      <p>task 2:</p>
      <div className="myDiv" style={
        {
          backgroundColor: `${color()}`,
        }
      }></div>
      
      <div className='promptDiv' style={{
        width: 100,
        height: 100,
        backgroundColor: `${promptColor()}`
      }}>{(backDivColor === 'black')? <p>Wrong color!</p> : '' }</div>

  </div>
  </React.StrictMode>,
)
