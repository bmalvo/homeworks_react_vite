import { useRef } from "react";

export const useOneTimeRef = <T>(initFn: () => T) => {

    const value = useRef<T|null>(null)

    value.current === null ? value.current = initFn() : null;

    return value;
}
