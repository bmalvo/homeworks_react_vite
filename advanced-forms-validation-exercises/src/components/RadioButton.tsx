import { ChangeEvent} from "react";

export type RadioButtonProps = {

    label: string;
    value: string;
    name: string;
    onChange: (e: ChangeEvent) => void 
}

export const RadioButton = (({label, value, onChange, name}: RadioButtonProps) => {

    return <>
        <div>
            <label>{label}    
                <input type='radio' value={value} name={name} onChange={onChange}/>
            </label>
        </div>
    </>
});