import { ReactNode } from "react";

export type DataListSecondProps<T>     = {

    items: T[];
    children ?: (items: T[]) => ReactNode; 
}

export const DataListSecond = <T extends Record<string, string | number>>({ items, children: renderList }: DataListSecondProps<T>) => {

    if (renderList) {
        
        return renderList(items)
    }

    return <>
        <ul>
            {
                items.map((item, index) =>

                    <li key={index}>
                        {Object.keys(item)
                            .map((key, subindex) => <p key={subindex}>{key}: {item[key]}</p>)}
                    </li>)
            }
        </ul>
    </>
};