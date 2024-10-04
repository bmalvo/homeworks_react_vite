export type paginatedPeople= {

   first: number,
   prev: number | null,
   next: number | null,
   last: number,
   pages: number,
   items: number,
    data: {
        id: string;
        name: string
    }[],
}