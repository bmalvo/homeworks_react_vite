import { Child } from "./Child";

const App = () => {
  const handleClick = () => {
    console.log('Clicked from parent!');
  }

   return <Child callback={handleClick} />
}

export { App }
