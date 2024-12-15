import { DataList } from "./DataList"

const getRandomArray = (): number[] => {

  const result = [];
  for (let i = 0; i < 10; i++) {
    
    result.push(Math.round(Math.random() * 100))
  }

  return result
}

export const App = () => {
  
  const handleElementClick = (element: number) => {

    console.log(element);
  }

  return <>
    <DataList<number> items={getRandomArray()}
      callback={handleElementClick}
    />
  </>
}