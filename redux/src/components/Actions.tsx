import { useDispatch } from "react-redux"
import { setName, setPrice } from "../slices/productSlice"

export const Actions = () => {

    const dispatch = useDispatch();

    const setProductName = () => { 
        dispatch(setName('Product 1234'));
    }

    const setProductPrice = () => { 
        dispatch(setPrice(1234));
    }

    return <>
        <div>
            <button onClick={setProductName}>Set product name</button>
            <button onClick={setProductPrice}>Set product price</button>
        </div>
    </>
}