import { useGetIpAddressQuery } from "../slices/ipSlice";

export const Actions = () => {

  const { refetch } = useGetIpAddressQuery();
  
  const handleFirstRefetch = () => {
      
    refetch();
  }
  
  const handleSecondRefetch = () => {

    return null;
  }

  return <>
    <div>
      <button onClick={handleFirstRefetch}>Refetch #1</button>
      <button>Refetch #2</button>
    </div>
  </>
}