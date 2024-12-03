import { useForm } from "react-hook-form"

type FormData = {

  login: string;
  password: string;
}

export const App = () => {

  const { register, handleSubmit } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {

    console.log(data)
  }

  return <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('login', {required: true, minLength: 3, })} />
      <input type="password" {...register('password')} />
      <button type="submit">Log in</button>
    </form>
  </>
}