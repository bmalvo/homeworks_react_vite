import { getAllUsers } from "@/db/users"

export const GET = async (request: Request) => {

    const users = await getAllUsers();

    console.log('REQUEST: ', request)
    
    return Response.json(users)

}