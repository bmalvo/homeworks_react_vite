import { useEffect, useState } from "react"
import { useInput } from "./hooks/useInput";

export const Exercise1v2 = () => {
    const selectInput = useInput('');
    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(selectInput.value);
    }, [selectInput.value])

    return <>
        <select {...selectInput}>
            {!selectInput.value && <option value=''>select an option</option>}
            <option value="first">first</option>
            <option value="second">second</option>
            <option value="third">third</option>
        </select>
        <input type="text" name="value" value={value} readOnly/>
    </>
}
