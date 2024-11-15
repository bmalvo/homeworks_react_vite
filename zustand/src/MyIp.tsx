import { useShallow } from "zustand/shallow"
import { useFooStore } from "./store/useFooStore"

export const MyIp = () => {

    const [ip, fetchMyIp] = useFooStore(useShallow(state => [state.ip, state.fetchMyIp]))

    const handleIP = () => {

        fetchMyIp();
    }

    return <>
        <div>{ip}</div>
        <button onClick={handleIP} disabled={!!ip}>display your ip</button>
    </>
} 