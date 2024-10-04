import { paginatedPeople } from "../../../types";

export const poepleLoader = async(page: number) => {

    const response = await fetch(`http://localhost:3000/people?_page=${page}`);

    return response.json() as Promise<paginatedPeople>;
}