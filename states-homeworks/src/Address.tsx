type AdressObj = {
    country: string;
    city: string;
    street: string;
}

import { useState } from "react"

const Address = () => {
    const [address, setAdress] = useState<AdressObj>({
        country: 'Poland',
        city: 'Śwignajno Małe',
        street: 'Cudne Manowce'
    });

    const handleClick = () => {
        setAdress({
            ...address,
            city: address.city === 'Śwignajno Małe'? 'Męcikał' : 'Śwignajno Małe',
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
