import { ipApiSlice, useGetIpAddressQuery } from "../slices/ipSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";

export const Actions = () => {

  const { refetch } = useGetIpAddressQuery();
  const dispatch = useAppDispatch();
  
  const handleFirstRefetch = () => {
      
    refetch();
  }
  
  const handleSecondRefetch = () => {

    dispatch(ipApiSlice.endpoints.getIpAddress.initiate(undefined, {

      forceRefetch: true
    }))
  }

  return <>
    <div>
      <button onClick={handleFirstRefetch}>Refetch #1</button>
      <button onClick={handleSecondRefetch}>Refetch #2</button>
    </div>
  </>
}