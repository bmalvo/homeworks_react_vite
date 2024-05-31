import { FormEvent} from "react"
import { useForm } from "./hooks/useForm";

type FormValues = {
  login: string;
  password: string,
  age: string;
  bio: string;
  gender: string;
  agreement: boolean;
  contact: string;
}

export const Form2 = () => {
    const [formState, handleChange] = useForm<FormValues>({
        login: '',
        password: '',
        age: '',
        bio: '',
        gender: 'men',
        agreement: false,
        contact: ''
    });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

      const { login,password, age, bio, gender, agreement, contact } = formState;
    console.log(`Login: ${login}`)
    console.log(`Password: ${password}`)
    console.log(`Age: ${age}`)
    console.log(`Bio: ${bio}`)
    console.log(`Gender: ${gender}`)
    console.log(`Agreement: ${agreement}`)
    console.log(`Contact: ${contact}`)
  }

    
    

  return <form onSubmit={handleSubmit}>
    <div>  
    <input type="text" name="login" value={formState.login} onChange={handleChange} />
    {!formState.login && <p>login is required!</p>}
    {formState.login.length < 3 && <p>login must be min 3 signs length!</p>}
    </div>
    <div>
    <input type="number" name="age" value={formState.age} onChange={handleChange}/>
      </div>
      <div>
    <input type="password" name="password" value={formState.password} onChange={handleChange}/>
    </div>
    <div>
      <textarea name="bio" value={formState.bio} onChange={handleChange}></textarea>
    </div>
    <div>  
    <select name="gender" value={formState.gender} onChange={handleChange}>
      <option value="men">Men</option>
      <option value="woman">Woman</option>
      <option value="unknown">another</option>
    </select>
    </div>
    <div>
      <input name="agreement" type="checkbox" checked={formState.agreement}  onChange={handleChange}/>
      <span>Agreement</span>
    </div>
    <div>
      <div>
        <input type="radio" name="contact" value="email" checked={ formState.contact === "email"} onChange={handleChange}/>
        Email
      </div>
      <div>
        <input type="radio" name="contact" value="sms" checked={ formState.contact === "sms"} onChange={handleChange}/>
        Sms
      </div>
      <div>
        <input type="radio" name="contact" value="none" checked={ formState.contact === 'none'} onChange={handleChange}/>
        Nothing
      </div>
    </div>
    <button type="submit">Save</button>
  </form>
}
