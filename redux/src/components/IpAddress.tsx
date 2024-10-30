import { useSelector } from "react-redux"
import { RootState } from "../store"


export const IpAddress = () => {

    const { value, error, loading } = useSelector((state: RootState) => state.ip);
    
    if (loading) return <p>Loading IP address...</p>
    if (error) return <p>{error}</p>
    return <p>{ value }</p>
}