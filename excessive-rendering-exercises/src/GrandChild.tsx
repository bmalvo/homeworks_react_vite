import { memo } from "react";

export const GrandChild = memo(() => {

    console.log('rendering GrandChild');

    return <>
        <h3>i am a GrandChild</h3>
    </>
})