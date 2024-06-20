import { useCallback } from "react";
import { ChildWithFunction } from "./ChildFithFunction";

type ParentProps = {
  id: number;
}

export const Parent = ({id}: ParentProps) => {

  const foo = useCallback((value: number) => {
    const url = `https://api.test.com/${id}?value=${value}`
    console.log('calling', url)

  },[id])

  return <div>

    <ChildWithFunction callback={foo} />
    </div>
}