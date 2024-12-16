import { useActionState, useOptimistic, useState } from "react";

type FormState = {

    message: string;
}

type EmailFormProps = {

    currentEmail: string;
    onEmailUpdate: (email: string) => void;
}


export const EmailForm = ({currentEmail, onEmailUpdate}: EmailFormProps) => {

    const [userEmail, setUserEmail] = useOptimistic(currentEmail)

    const handler = async (previousState: FormState, formData: FormData) => {

        const email = formData.get('email');
        
        
        if (!email || typeof email !== 'string') return {
            
            message: 'something went wrong'
        }

        setUserEmail(email);
        
    const asyncOpt = new Promise((resolve, reject) => {
        setTimeout(() => {

            const randomValue = Math.random();
            
            if (randomValue > 0.5) {
                
                resolve(true)
            } else {
                
                reject()
            }
        }, 1000)
    })

    try {

        const result = await asyncOpt;
        onEmailUpdate(email);
        console.log('SUCCESS')
        return {
            message: 'success'
        }
    } catch (e) {

        console.log('FAILURE')
        return {
            message: 'failure'
        }
    }
}

    const [state, submitAction, isPending] = useActionState<FormState, FormData>(handler, {

        message: '',
    });

    return <>
        <div>
            <h1>{userEmail}{ isPending ? <span>loading...</span> : null}</h1>
            <form>
                <input type="email" name="email"/>
                <button formAction={submitAction} type="submit">submit</button>
            </form>
        </div>
    </>
}