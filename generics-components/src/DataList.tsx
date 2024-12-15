export type DataListProps = {

    items: string[];
    callback: (item: string) => void;
}

export const DataList = ({items, callback}: DataListProps) => {

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