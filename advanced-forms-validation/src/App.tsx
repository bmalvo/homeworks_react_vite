import { InferType, object, ObjectSchema, string, ValidationError } from "yup";

type loginDto = {

  login: string;
  password: string;
}

const loginSchema: ObjectSchema<loginDto> = object({

  login: string().required().min(5),
  password: string().required().min(5)
})
 
// type LoginData = InferType<typeof loginSchema>;

// try {
//   await loginSchema.validate({
//     login: '',
//     password: '12345'
//   })
// } catch (e) {
//   const error_message = e instanceof ValidationError ? console.log(e.message) : '';
//   console.log(error_message)
// }

export const App = () => {

  return null;
}