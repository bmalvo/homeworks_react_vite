import { useFormStatus } from "react-dom"

export const FormStatus = () => {

    const { action, data, method, pending } = useFormStatus();
    
    const password: string = data?.get('password') as string;

    console.log(action, method); 

    return <>
        <div>
            {pending ? <p>Form is proccesing Your request with data - { password}</p> : null}
        </div>
    </>
}