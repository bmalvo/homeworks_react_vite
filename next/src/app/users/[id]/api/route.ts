import { addNewUser, getSingleUserById } from "@/db/users";

export type RouteParams = {

    params: Promise<{
        id: string;
    }>
}

export const GET = async (request: Request, { params }: RouteParams) => {
    
    const { id } = await params;

    const user = await getSingleUserById(Number(id)); 

    if (!user) {

        return new Response('User not found', {
            status: 404
        });
    }

    return Response.json({user})
}

export const POST = async (request: Request) => {

    const { name}: {name:string} = await request.json();

    const newUser = await addNewUser(name);

    return Response.json(newUser);
}