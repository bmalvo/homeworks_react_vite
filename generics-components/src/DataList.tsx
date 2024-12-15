export type DataListProps<T>     = {

    items: T[];
    callback: (item: T) => void;
    visibleKeys: (keyof T)[];
}

export const DataList = <T extends Record<string, string | number>>({items, callback, visibleKeys}: DataListProps<T>) => {

    return <>
        <ul>
            {
                items.map((item, index) =>
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