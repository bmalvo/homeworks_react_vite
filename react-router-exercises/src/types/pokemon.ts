export type SinglePokemon = {

    id: number;
    name: string;
    weight: number;
    height: number;
    types: [{
        type: {
            name: string
        }
    }]
}