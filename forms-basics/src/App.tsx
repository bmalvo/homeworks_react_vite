import { ChangeEvent, FormEvent, useState } from "react"

type formData = {
  login: { value: string };
}

export const App = () => {
  const [login, setLogin] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [gender, setGender] = useState('men');
  const [agreement, setAgreement] = useState(false);
  const [contact, setContact] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // not controled
    const { login: _login } = e.target as typeof e.target & formData;
    console.log(_login.value)

    // controled
    console.log(`Login: ${login}`)
    console.log(`Age: ${age}`)
    console.log(`Bio: ${bio}`)
    console.log(`Gender: ${gender}`)
    console.log(`Agreement: ${agreement}`)
    console.log(`Contact: ${contact}`)
  }

  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  }

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  }

  const handleBioChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  }

  const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  }

  const handleAgreementChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAgreement(e.target.checked);
  }

  const handleContactChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContact(e.target.value);
  }

  return <form onSubmit={handleSubmit}>
    <div>  
    <input type="text" name="login" value={login} onChange={handleLoginChange} />
    {!login && <p>login is required!</p>}
    {login.length < 3 && <p>login must be min 3 signs length!</p>}
    </div>
    <div>
    <input type="number" name="age" value={age} onChange={handleAgeChange}/>
    </div>
    <div>
      <textarea name="bio" value={bio} onChange={handleBioChange}></textarea>
    </div>
    <div>  
    <select name="" value={gender} onChange={handleGenderChange}>
      <option value="men">Men</option>
      <option value="woman">Woman</option>
      <option value="unknown">another</option>
    </select>
    </div>
    <div>
      <input type="checkbox" checked={agreement}  onChange={handleAgreementChange}/>
      <span>Agreement</span>
    </div>
    <div>
      <div>
        <input type="radio" name="contact" value="email" checked={ contact === "email"} onChange={handleContactChange}/>
        Email
      </div>
      <div>
        <input type="radio" name="contact" value="sms" checked={ contact === "sms"} onChange={handleContactChange}/>
        Sms
      </div>
      <div>
        <input type="radio" name="contact" value="none" checked={ contact === 'none'} onChange={handleContactChange}/>
        Nothing
      </div>
    </div>
    <button type="submit">Save</button>
  </form>
}
