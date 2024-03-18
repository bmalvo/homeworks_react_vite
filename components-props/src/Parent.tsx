import { Foo } from "./Foo";
import { SingleElement } from "./types";

const Parent = () => {
    const result:SingleElement[] = [];

    for (let i = 0; i < 10; i++){
        result.push({
            id: 1,
            value: `Value: ${Math.round(Math.random() * 1000)}`
        })
    }
    return <Foo elements={ result } single = {{ id:10, value: 'Lorem' }} />
}

export { Parent }
