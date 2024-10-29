import { useSelector } from "react-redux"
import { RootState } from "../store"

export const Products = () => {

    const {list, count} = useSelector((state: RootState) => state.products)

    return <>
        <div>
            <strong>Products amount: { count}</strong>    
        <ul>
            {list.map((el, index) => <li key={index}>{el}</li>)}
        </ul>
        </div>
    </>
}