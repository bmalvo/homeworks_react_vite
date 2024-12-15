import { useCallback } from "react";
import { DataList } from "./DataList"


export const App = () => {
  
  const handleElementClick = (element: string) => {

    console.log(element);
  }

  return <>
    <DataList items={
      ['stefka', 'brydzia', 'ninja', 'drapek', 'bubu']}
      callback={handleElementClick}
    />
  </>
}