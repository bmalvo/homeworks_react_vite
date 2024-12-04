import { useEffect } from "react";
import { useForm } from "react-hook-form"

type FormData = {

  login: string;
  password: string;
  agreement: boolean;
  intrested: 'yes' | 'no';
  marketing: 'no' | 'email' | 'phone';
  age: number;
  bio: string;
}

export const App = () => {

  const { register, handleSubmit, reset, getValues, setValue, watch,  formState: { errors} } = useForm<FormData>();
  
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

  useEffect(() => {

    setValue('login', 'Brygida')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const agreementValue = watch('agreement')
  console.log(agreementValue);

  return <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('login', { required: true, minLength: 3, })} />
      {errors.login && errors.login.type === 'required' ? <p>Login is required!</p> : null}
      {errors.login && errors.login.type === 'minLength' ? <p>Min 3 characters in login</p> : null}
      <input type="password" {...register('password')} />
      <input type="number" {...register('age', {valueAsNumber: true})} />
      <textarea {...register('bio')} />
      <input type="checkbox" {...register('agreement')} />
      <select {...register('intrested')}>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div>
        <label htmlFor="">
          <input type="radio" value='no' {...register('marketing')} />No
        </label>
        <label>
          <input type="radio" value='email' {...register('marketing')} />E-mail
        </label>
        <label>
          <input type="radio" value='phone' {...register('marketing')} />Phone
        </label>
      </div>
      <button type="button" onClick={resetForm}>Reset</button>
      <button type="button" onClick={readValues}>Get Values</button>
      <button type="submit">Log in</button>
      { !agreementValue ? <p>You need first read this: www.example.com/terms</p> : null}
    </form>
  </>
}