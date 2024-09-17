import { Params } from "react-router-dom";
import { apicall } from "../utils/apicall";

export const taskLoader = ({ params }: { params: Params<'id'> }) => {
    
    const { id } = params;

    return apicall(`tasks/${id}`)
}