import { ReactNode } from "react";

export type DataListProps<T>     = {

    items: T[];
    callback: (item: T) => void;
}

export const DataList = <T extends ReactNode>({items, callback}: DataListProps<T>) => {

    return <>
        <ul>
            {
                items.map((item, index) =>
                    <li key={index}>
                        {item}
                        <button onClick={() => callback(item)}>Click me!</button>
                    </li>)
            }
        </ul>
    </>
} 