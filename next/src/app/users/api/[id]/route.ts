export type RouteParams = {

    params: Promise<{
        id: string;
    }>
}

export const GET = async (request: Request, { params }: RouteParams) => {
    
    const { id } = await params;

    return Response.json({id})
}