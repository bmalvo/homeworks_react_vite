import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type RadioButtonProps = {

    label: string;
    value: string;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps & UseFormRegisterReturn>(({ label, value,  ...register}, ref) => {

    return <>
        <div>
            <label>{label}    
            <input type='radio' value={value} ref={ref} {...register} />
            </label>
        </div>
    </>
});