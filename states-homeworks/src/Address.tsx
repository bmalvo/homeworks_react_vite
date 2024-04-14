type AdressObj = {
    country: string;
    city: string;
    street: string;
}

import { useState } from "react"

const Address = () => {
    const [address, setAdress] = useState<AdressObj>({
        country: 'Poland',
        city: 'Żory',
        street: 'Wierzbowa'
    });

    const handleClick = () => {
        setAdress({
            ...address,
            city: 'Gdańsk'
        })
    }
    
    return (
        <>
            <h1> {address.country}, {address.city}, {address.street}</h1>
            <button onClick={handleClick}>Change City</button>
        </>
    )
}

export { Address }
