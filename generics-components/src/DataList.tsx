import { FunctionComponent, ReactNode } from "react";

export type DataListProps<T>     = {

    items: T[];
    callback: (item: T) => void;
    visibleKeys: (keyof T)[];
    RowComponent?: FunctionComponent<{ item: T }>;
    renderRow?: (item : T, index: number) => ReactNode;
}

export const DataList = <T extends Record<string, string | number>>({items, callback, visibleKeys, renderRow}: DataListProps<T>) => {

    return <>
        <ul>
            {
                items.map((item, index) =>

                    renderRow ? <li key={index}>
                        {renderRow(item, index)}
                    </li> : 
                    <li key={index}>
                        {Object.keys(item)
                            .filter(key => visibleKeys.includes(key))
                            .map((key, subindex) => <p key={subindex}>{key}: {item[key]}</p>)}
                        <button onClick={() => callback(item)}>Click me!</button>
                    </li>)
            }
        </ul>
    </>
} 