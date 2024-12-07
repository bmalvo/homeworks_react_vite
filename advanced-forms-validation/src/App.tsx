import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InferType, object, string } from "yup";

const loginSchema = object({

  login: string().required().min(5),
  password: string().required().min(5)
})

type loginData = InferType<typeof loginSchema>;

export const App = () => {

  const { register, handleSubmit, formState: {errors} } = useForm<loginData>({

    resolver: yupResolver(loginSchema)
  });


  const onsubmit = (data: loginData) => {

    console.log(data)
  }

  console.log(errors)

  return <>
    <form onSubmit={handleSubmit(onsubmit)}>
      <input type="text" {...register('login')} />
      <input type="password" {...register('password')} />
      <button type="submit">log in</button>
  </form>
  </>;
}