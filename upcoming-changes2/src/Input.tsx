import { ForwardedRef} from "react";

export type InputProps = {
    
    name: string;
    ref: ForwardedRef<HTMLInputElement>
}

export const Input = ({ name, ref }:InputProps) => {

    return <>
        <div>
            <input type="text" name={name} ref={ ref} />
        </div>
    </>
}