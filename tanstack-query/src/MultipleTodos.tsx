import { useMultipleTodos } from "./hooks/useMultipletodos"

export const MultipleTodos = () => {
    const { data } = useMultipleTodos();

    return <ul>
        {data.map(el => <li key={el?.id}>{ el?.title}</li>)}
    </ul>
}