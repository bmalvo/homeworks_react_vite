import { useActionState } from "react";

const CORRECT_PASSWORD = 'loremipsum';

type FormState = {

    message: string;
    error: string;
}

const handler = async (previousState: FormState, formData: FormData) => {

    const password = formData.get('password');

    return new Promise<FormState>(resolve => {
        
        setTimeout(() => {

            if (password === CORRECT_PASSWORD) {
                
                resolve({

                    message: 'You got the access!',
                    error: ''
                });
            } else {

                resolve({

                    message: '',
                    error: 'This is not a correct password!'
                })
            }

            // resolve(previousState + 1)
        }, 1000)
})
}

export const Form = () => {

    const [state, submitAction, isPending] = useActionState<FormState, FormData>(handler, {

        message: '',
        error: ''
    });

    return <>
        <div>
            {/* <h1>{isPending ? <p>loading...</p> :state }</h1> */}
            <form>
            <input type="password" name="password"/>
            <button formAction={submitAction} type="submit">submit</button>
            </form>
            {isPending ? <p>[INFO] Loading...</p> : null}
            {state.message ? <p>[SUCCESS] { state.message}</p> : null}
            {state.error ? <p>[ERROR] { state.error}</p> : null}
        </div>
    </>
}