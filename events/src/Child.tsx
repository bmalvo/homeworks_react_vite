import { SyntheticEvent, ChangeEvent } from "react";

type Props = { 
    callback: () => void;
}

const Child = ({ callback }: Props) => {
    const handleLocalClick = (e: SyntheticEvent ) => {
        console.log('Clicked from child!', e)
    }
    const handleAnotherClick = (identifier: string) => {
        console.log('Clicked from child!', identifier)
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }
    return (
        <>
            <button onClick={callback}>Click</button>
            <button onClick={handleLocalClick}>Click</button>
            <button onClick={() => handleAnotherClick('test-id')}>Click</button>
            <input name='test' id='test' type='test' onChange={handleChange} />
        </>
    )
} 

export { Child }
