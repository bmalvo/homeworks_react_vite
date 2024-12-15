import { DataList } from "./DataList"
import { DataListSecond } from "./DataListSecond";
import { SingleDataElement } from "./SingleDataElement";
import { SingleElement } from "./types";


export const App = () => {
  
  const handleElementClick = (element: SingleElement) => {

    console.log(element);
  }

  // return <>
  //   <DataList items={[

  //     { id: 1, value: 'stefka', a:1, b: 2, c: 3 },
  //     { id: 2, value: 'brydzia', label: 'british', a:3, b:2, c:1},
  //     {id: 3, value: 'ninja', a:0, b:33, c:12}
  //   ]}
  //     visibleKeys={['value']}
  //     callback={handleElementClick}
  //     RowComponent={SingleDataElement}
  //     renderRow={(item, index) => index % 2 === 0 ? <SingleDataElement item={item} /> : <p>{item.value} - { item.id}</p>}
  //   />
  // </>

  return <DataListSecond  items={[

      { id: 1, value: 'stefka', a:1, b: 2, c: 3 },
      { id: 2, value: 'brydzia', label: 'british', a:3, b:2, c:1},
      {id: 3, value: 'ninja', a:0, b:33, c:12}
  ]}
  >
    {
      (items) => <p>{items.map(item => item.value).join(',')}</p>
    }

  </DataListSecond>
}