import { createFileRoute } from '@tanstack/react-router'
import { FormEvent, useState } from 'react'
import { useCreateTaskMutation } from '../mutations/useCreateTaskMutation';

const New = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { mutate} = useCreateTaskMutation();

  const handleSubmit = (e: FormEvent) => {

    e.preventDefault();

    mutate({

      title,
      description
    })
  };

  return <>
    <div>
      <h1>New Task</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='title' value={title}
          placeholder='title'
          onChange={e => setTitle(e.target.value)} />
        <input type="text" name='description' value={description}
          placeholder='description'
          onChange={e => setDescription(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
    </div>
  </>
}

export const Route = createFileRoute('/new')({
  component: New,
})
