// import { Form } from "./Form"

import { useState } from "react";
import { EmailForm } from "./EmailForm"

export const App = () => {

  const [userEmail, setUserEmail] = useState('email@email.com');

  return <>
    {/* <Form /> */}
    <EmailForm currentEmail={ userEmail} onEmailUpdate={setUserEmail} />
  </>
}