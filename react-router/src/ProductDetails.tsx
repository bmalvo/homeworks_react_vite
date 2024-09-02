import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom"

export const ProductDetails = () => {

    const navigate = useNavigate();

    const disable = true;

    useEffect(() => {

        setTimeout(() => {
            navigate('..', {
                relative: 'path'
            })
        }, 1000)
    },[])

    // if(disable) return <Navigate relative='path' to='..' />

    return <>
        <div>
            <h1>Product id: 235432</h1>
            <Link relative="path" to='..'>Go back to product overview</Link>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </>
}