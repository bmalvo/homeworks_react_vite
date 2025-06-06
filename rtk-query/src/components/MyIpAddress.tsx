import { useGetIpAddressQuery } from "../slices/ipSlice"

export const MyIpAddress = () => {

    const { data, isLoading, isFetching } = useGetIpAddressQuery();
    
    if (isLoading || isFetching) return <h1>Loading IP address...</h1>
    
    return <h1>{ data?.ip || 'No IP data available'}</h1>
}