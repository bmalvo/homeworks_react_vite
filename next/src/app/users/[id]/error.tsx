'use client'

import { useEffect } from "react";

type ErrorParams = {

    error: Error;
}

const Error = ({ error }: ErrorParams) => {
    
    useEffect(() => {

        console.log(error);
    },[])

    return <p>Error!</p>
}

export default Error;