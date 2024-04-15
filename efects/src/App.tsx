import { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [intervalTime, setIntervalTime] = useState(1000);

  useEffect(() => {
    
    const interval = setInterval(() => {
      setCounter(prev => prev + 1)
    }, intervalTime)

    return () => {
      clearInterval(interval);
    }
  }, [intervalTime]);

  const increaseTime = () => {
    setIntervalTime(prev => prev + 1000)
  }

  return (
    <>
      < h1 > {counter}</h1 >
      <button onClick={increaseTime}>{ intervalTime}</button>
    </>
  )
}
  
export { App }
