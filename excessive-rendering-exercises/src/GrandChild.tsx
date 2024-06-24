import { memo } from "react";

type GrandChildProps = {
    elements: number[];
}

export const GrandChild = memo(({elements}: GrandChildProps) => {

    console.log('rendering GrandChild');

    return <>
        <h3>i am a GrandChild { elements.join(', ')}</h3>
    </>
})