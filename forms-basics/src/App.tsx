import { FormEvent } from "react"

type formData = {
  login: { value: string };
}

export const App = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { login } = e.target as typeof e.target & formData;
    console.log(login.value)

  }

  return <form onSubmit={handleSubmit}>
    <input type="text" name="login" />
    <button type="submit">Save</button>
  </form>
}
