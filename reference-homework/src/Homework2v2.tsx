import { FormEvent, MutableRefObject } from "react";

export type Props = {
    formRef: MutableRefObject<HTMLFormElement | null>
}

export const Homework2v2 = ({formRef}: Props ) => {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Form is being send!')
    }

    return <form action="" onSubmit={handleSubmit} ref={formRef}>
        <input type="text" name="login"/>
        <input type="password" name="password"/>
    </form>
}
