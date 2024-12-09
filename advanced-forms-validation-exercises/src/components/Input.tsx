import { TextField } from "@mui/material";
import { forwardRef } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type InputProps = {

    label: string;
    type: 'text' | 'number';
    error?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, InputProps & UseFormRegisterReturn>(({ label, type, error, ...register}, ref) => {

    return <>
        <div>
            <TextField
                fullWidth
                label={label}
                variant='outlined'
                error={!!error}
                helperText={error?.message}
                type={type}
                ref={ref}
                {...register} />
        </div>
    </>
});