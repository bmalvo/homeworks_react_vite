import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react';

const WrongPostsPlace = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate({ to: '/posts/new' })
    }, 3000)
  }, []);

  return (
    <div>
      <h1>Such post doesn't exist</h1>
      <p>Did You want to go to /posts/new?</p>
    </div>
  )
}

export const Route = createFileRoute('/_wrapper/posts/$')({
  component: WrongPostsPlace,
})
