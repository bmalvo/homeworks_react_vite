import { useForm } from "react-hook-form"

type FormData = {

  login: string;
  password: string;
}

export const App = () => {

  const { register, handleSubmit, reset, getValues,  formState: {isValid, errors} } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {

    console.log(data)
  }

  const resetForm = () => {

    reset({
      login: 'Pan Kracy',
      password: '*********'
    });
  }

  const readValues = () => {

    console.log(getValues());
  }

  return <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('login', { required: true, minLength: 3, })} />
      {errors.login && errors.login.type === 'required' ? <p>Login is required!</p> : null}
      {errors.login && errors.login.type === 'minLength' ? <p>Min 3 characters in login</p> : null}
      <input type="password" {...register('password')} />
      <button type="button" onClick={resetForm}>Reset</button>
      <button type="button" onClick={readValues}>Get Values</button>
      <button type="submit">Log in</button>
    </form>
  </>
}