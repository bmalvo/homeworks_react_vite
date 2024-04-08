import { SyntheticEvent } from "react";

const Homework2 = () => {
    const handleClick = (e: SyntheticEvent) => {
        const random = Math.random();
        if (random < 0.5) e.preventDefault();
        console.log('clicked');
    }

    return <a onClick={handleClick} href="https://www.google.com">Go to a Google</a>
}

export { Homework2 }
