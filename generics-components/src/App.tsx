import { DataList } from "./DataList"

type SingleElement = {

  id: number;
  a: number;
  b: number;
  c: number;
  value: string;
  label?: string;
}

export const App = () => {
  
  const handleElementClick = (element: SingleElement) => {

    console.log(element);
  }

  return <>
    <DataList items={[

      { id: 1, value: 'stefka', a:1, b: 2, c: 3 },
      { id: 2, value: 'brydzia', label: 'british', a:3, b:2, c:1},
      {id: 3, value: 'ninja', a:0, b:33, c:12}
    ]}
      visibleKeys={['value']}
      callback={handleElementClick}
    />
  </>
}