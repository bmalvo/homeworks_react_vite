import { useId } from "react";

export const Baz = () => {

    const id = useId();
    const id2 = useId();

    console.log(id, id2)

    return <>
        <div>
            <label htmlFor={id}>Some label</label>
            <input type='text' id={id} />
        </div>
    </>
}