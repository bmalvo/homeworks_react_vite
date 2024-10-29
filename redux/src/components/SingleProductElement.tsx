import { useDispatch } from "react-redux";
import { setProduct } from "../slices/productSlice";

type SingleProductElement = {

    name: string;
    price: number;
}

export const SingleProductElement = ({ name, price }: SingleProductElement) => {
    
    const dispatch = useDispatch();

    const selectProduct = () => {

        dispatch(setProduct({
            name,
            price
        }))
    }

    return <li>
        <strong>{name}</strong>
        <button onClick={selectProduct}>select</button>
    </li>
}