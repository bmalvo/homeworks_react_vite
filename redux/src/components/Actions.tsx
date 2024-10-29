import { useDispatch } from "react-redux"
import { setName, setPrice } from "../slices/productSlice"
import { addProduct } from "../slices/productsSlice";

export const Actions = () => {

    const dispatch = useDispatch();

    const setProductName = () => { 
        dispatch(setName('Product 1234'));
    }

    const setProductPrice = () => { 
        dispatch(setPrice(1234));
    }

    const addNewProduct = () => {
        dispatch(addProduct(`Product ${Math.round(Math.random() * 1000)}`));
    }

    return <>
        <div>
            <button onClick={setProductName}>Set product name</button>
            <button onClick={setProductPrice}>Set product price</button>
            <button onClick={addNewProduct}>Add new Product</button>
        </div>
    </>
}