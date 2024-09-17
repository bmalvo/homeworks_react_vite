import { Params } from "react-router-dom";

export const taskLoader = ({ params }: { params: Params<'id'> }) => {
    
    const { id } = params;

    return fetch(`http://localhost:3000/tasks/${id}`)
}