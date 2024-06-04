import { useEffect, useState } from "react";
import { useForm } from "./hooks/useForm";

type FormValues = {
    wheels: number;
    cabrio: boolean;
    twinExaust: boolean;
    electricWindows: boolean;
    paint: string;
}

export const Exercise2 = () => {
    const [cost, setCost] = useState(0);
    const [form, handleChange] = useForm<FormValues>({
        wheels: 4,
        cabrio: false,
        twinExaust: false,
        electricWindows: true,
        paint: ''
    });

    const getCost = (values: FormValues) => {
        const { wheels, cabrio, twinExaust, electricWindows, paint } = values;
        let amount = 0;

        amount += wheels * 150;
        amount += cabrio ? 1000 : 0;
        amount += twinExaust ? 3000 : 0;
        amount += electricWindows ? 0 : 5000;

        switch (paint) {
            case 'metalic':
                amount += 100;
                break;
            case 'pearl':
                amount += 10000;
                break;
            case 'matte':
                amount += 1000;
                break;
                default: break;
        }
        return amount;
    };

    useEffect(() => {
        setCost(getCost(form))
    }, [form])

    return <>
        <p>Summary cost: { cost }</p>
        <form action="" className="Ex2">
            <div>
                <label htmlFor="wheels">wheel count</label>
                <input type="number" id="wheels" name="wheels" value={form.wheels} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="cabrio">sliding roof</label>
                <input type="checkbox" id="cabrio" name="cabrio" checked={form.cabrio} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="twinExaust">twin exhaust</label>
                <input type="checkbox" id="twinExaust" name="twinExaust" checked={form.twinExaust} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="electricWindows">electric windows</label>
                <input type="checkbox" id="electricWindows" name="electricWindows" checked={ form.electricWindows} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="paint">color surface</label>
                <select id="paint" name="paint" value={form.paint} onChange={handleChange}>
                    {!form.paint && <option value="">choose lacquer</option>}
                    <option value='pearl'>pearl</option>
                    <option value="metalic">metalic</option>
                    <option value="matte">matte</option>
                </select>
            </div>
            
    </form>
    </>
}
