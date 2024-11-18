import { useShallow } from "zustand/shallow"
import { useIPStore } from "./store/useIPStore"

export const MyIp = () => {

    const [ip, fetchMyIp] = useIPStore(useShallow(state => [state.ip, state.fetchMyIp]))

    const handleIP = () => {

        fetchMyIp();
    }

    return <>
        <div>{ip}</div>
        <button onClick={handleIP} disabled={!!ip}>display your ip</button>
    </>
} 