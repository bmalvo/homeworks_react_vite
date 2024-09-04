import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom"

export const Payment = () => {

    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    console.log('location', location)
    console.log('searchParams getAll', searchParams.getAll('paymentId'))
    console.log('searchParams get', searchParams.get('paymentId'))
    console.log('searchParams entires', [...searchParams.entries()])

    const status = searchParams.get('paymentStatus');
    const id = searchParams.get('paymentid');

    // useEffect(() => {

    //     setTimeout(() => {
    //         setSearchParams({
    //             lorem: 'Ipsum'
    //         })
    //     }, 2000)
    // }, [])

    return (
        <div>
            <h1>Payment [{id}]</h1>
            <h2>Status [{status}]</h2>
        </div>
    )
}
