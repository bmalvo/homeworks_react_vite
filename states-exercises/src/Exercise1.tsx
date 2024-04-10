import { useState } from "react";

export const Exercise1 = () => {
    const [text, setText] = useState("");
    const originalText = "Hello, World!";

    const addLetter = () => {
        const letterCount = text.length;

        if (letterCount >= originalText.length) return;

        setText(prevText => `${prevText}${originalText[letterCount]}`)
    }

    return (
        <>
        <button onClick={addLetter}>+1</button>
        <h1>{ text }</h1>
        </>
    )
}
