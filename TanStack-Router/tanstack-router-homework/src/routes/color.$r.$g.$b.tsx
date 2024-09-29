import { createFileRoute } from '@tanstack/react-router'

const Color = () => {

  const { r, g, b } = Route.useParams();
  
  return (
    <>
    <p>RGB({r},{g},{b})</p>
      <div style={{
        height: '300px',
        width: '300px',
        backgroundColor: `rgb(${r},${g},${b})`
      }}>
      </div>
    </>
  )
}
  export const Route = createFileRoute('/color/$r/$g/$b')({
    component: Color,
  })
  