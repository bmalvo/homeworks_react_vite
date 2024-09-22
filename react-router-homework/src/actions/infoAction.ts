import { SingleInfo } from "../types";
import { apiCall } from "../utils/apiCall";

const upadateInfo = async (request: Request) => { 
    const formData = await request.formData();
    const title = formData.get('title')?.toString();
    const id = formData.get('id')?.toString();

    return apiCall<SingleInfo>(`infos/${id}`, {
        method: 'PUT',
        body: {
            title: title || ''
        }
    })
};

const deleteInfo = async (request: Request) => { 
    const formData = await request.formData();
    const id = formData.get('id')?.toString();

    return apiCall<SingleInfo>(`infos/${id}`, {
        method: 'DELETE'
    })
};

export const infoAction = async({request}: {request: Request}) => {

    const { method } = request;

    switch (method) {
        case "PUT": return upadateInfo(request);
        case "DELETE": return deleteInfo(request);
    }
}