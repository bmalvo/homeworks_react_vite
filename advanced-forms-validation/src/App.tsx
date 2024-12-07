import { InferType, object, string, ValidationError } from "yup";

const loginSchema = object({

  login: string().required().min(5),
  password: string().required().min(5)
})

type LoginData = InferType<typeof loginSchema>;

try {
  await loginSchema.validate({
    login: '',
    password: '12345'
  })
} catch (e) {
  const error_message = e instanceof ValidationError ? console.log(e.message) : '';
  console.log(error_message)
}

export const App = () => {

  return null;
}