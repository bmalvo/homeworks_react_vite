import { createFileRoute, useNavigate } from '@tanstack/react-router'

const Dolor = () => {
  
  const navigate = useNavigate();

  const goToLorem = () => {

    navigate({
      to: '/lorem'
    })
  }
   
  
  return <>
          <div>
            <p>Paszek pies gruby jest</p>
            <button onClick={goToLorem}>Go to Lorem</button>  
          </div>
         </>
}

export const Route = createFileRoute('/dolor')({
  component: Dolor,
})
