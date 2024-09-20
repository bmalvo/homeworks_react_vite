import { SingleInfo } from "../types";
import { apiCall } from "../utils/apiCall";

export const deleteInfo = async({request}: {request: Request}) => {

    const formData = await request.formData();
    const id = formData.get('id')?.toString();

    return apiCall<SingleInfo>(`infos/${id}`, {
        method: 'DELETE'
    })
}