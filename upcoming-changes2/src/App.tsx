// import { Form } from "./Form"

import { Suspense, useCallback, useEffect, useRef, useState } from "react"
import { Use } from "./Use"
import { ErrorBoundary } from "react-error-boundary";
import { ThemeContext } from "./context/ThemeContext";
import { Input } from "./Input";

// import { useState } from "react";
// import { EmailForm } from "./EmailForm"

export const App = () => {

  const [visible, setVisible] = useState(true);

  const promise = useCallback(() => 

    new Promise<number[]>((resolve, reject) => {
  
      setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
          
          resolve([1, 2, 3, 4, 5])
        } else {

          reject();
        }
      }, 3000)
    }), []);


  // const [userEmail, setUserEmail] = useState('email@email.com');

  const inputRef = useRef<HTMLInputElement>(null); 

  useEffect(() => {

    inputRef.current?.focus();
  },[])

  return <>
    {/* <Form />
    <EmailForm currentEmail={ userEmail} onEmailUpdate={setUserEmail} /> */}

    
    <ThemeContext value={{
      mode: 'dark'
    }}>
      <button onClick={() => setVisible(prev => !prev)}>Click</button>
      <Input name="name" ref={inputRef } />
    <ErrorBoundary fallback={<p>something went wrong...</p>}>
    <Suspense fallback={<p>loading...</p>}>
        <Use dataPromise={promise()} visible={ visible} />
    </Suspense>
    </ErrorBoundary>
    </ThemeContext>
  </>
}