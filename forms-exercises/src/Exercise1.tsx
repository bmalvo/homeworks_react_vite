import { ChangeEvent, useState } from "react"

export const Exercise1 = () => {
    const [select, setselect] = useState('');
    const [value, setValue] = useState('');

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        
        const { value } = e.target; 
            
        setselect(value);
        setValue(value);
    }

    return <>
        <select name="" id="" value={select} onChange={handleSelect}>
            {!select && <option value=''>select an option</option>}
            <option value="first">first</option>
            <option value="second">second</option>
            <option value="third">third</option>
        </select>
        <input type="text" name="value" value={value} readOnly/>
    </>
}
