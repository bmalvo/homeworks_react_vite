import { useEffect, useInsertionEffect, useLayoutEffect } from "react";

export const Effects = () => {

    useInsertionEffect(() => {

        console.log('InsertionEffect');
    })

    useLayoutEffect(() => {

        console.log('LayoutEffect');
    })

    useEffect(() => {

        console.log('useEffect');
    })

    return null;
}