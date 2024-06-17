import { FormEvent, ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";

export type PartialHTMLFormElement = { 
    submit: () => void
}

export const Homework2 = forwardRef((_, ref: ForwardedRef<PartialHTMLFormElement>) => {
    
    const formRef = useRef<HTMLFormElement>(null);
    useImperativeHandle(ref, () => {
        return {
        submit: () => {
            formRef.current?.requestSubmit()
        }
    }
    }, [])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Form is being send!')
    }

    return <form action="" onSubmit={handleSubmit} ref={formRef}>
        <input type="text" name="login"/>
        <input type="password" name="password"/>
    </form>
})
