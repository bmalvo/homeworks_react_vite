import { createFileRoute, useNavigate } from '@tanstack/react-router'

const Lorem = () => {

  const navigate = useNavigate();

  const goToValue = () => {

    navigate({
      to: '/value/$value',
      params: {value: '123'}
    })
  }

  return <>
          <p>Lorem ipsum dolor sit.</p>
          <button onClick={goToValue}>Go to Value</button>
         </>
}

export const Route = createFileRoute('/lorem')({
  component: Lorem,
})
