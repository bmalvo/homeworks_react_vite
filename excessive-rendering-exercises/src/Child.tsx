import { memo } from "react";
import { GrandChild } from "./GrandChild";

export const Child = memo(() => {

    console.log('rendering Child');

    return <>
        <h2>I am a Child</h2>
        <GrandChild />
    </>
})