import { apicall } from "../utils/apicall";

export const tasksLoader = async() => {

    return apicall('tasks');
}