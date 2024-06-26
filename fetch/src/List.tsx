import { useEffect, useState } from "react";

export type Entity = {
    id: string;
    prop1: string;
    prop2: number;
}

export const List = () => {

    const [entities, setEntities] = useState<Entity[]>([])
    const [loading, setLoadning] = useState<boolean>(true);

    const getData = async () => {
        const response = await fetch('http://localhost:3000/collection1');
        const data: Entity[] = await response.json();

        setEntities(data);
        setLoadning(false);
    }

    useEffect(() => {
        getData();
    },[])

    if (loading) return <p>Loading...</p>

    return (
        <ul>
            {entities.map(entity => <li key={entity.id}>{entity.prop1} - { entity.prop2}</li>)}
        </ul>
    )    
}
