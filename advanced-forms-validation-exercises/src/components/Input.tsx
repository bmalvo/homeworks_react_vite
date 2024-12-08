import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type InputProps = {

    label: string;
    type: 'text' | 'number';
}

export const Input = forwardRef<HTMLInputElement, InputProps & UseFormRegisterReturn>(({ label, type, ...register}, ref) => {

    return <>
        <div>
            <label>{label}</label>
            <input type={type} ref={ref} {...register} />
        </div>
    </>
});