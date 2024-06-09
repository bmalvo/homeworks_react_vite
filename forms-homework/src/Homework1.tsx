import { FormEvent, useState } from 'react';
import { useForm } from './hooks/useForm'
import { Field } from './Field';
import { Checkbox } from './Checkbox';

type FormValues = {
    login: string;
    password: string;
    rulesAccepted: boolean;
}

type FormErrors = {
    [key in keyof FormValues]: string[]
}

export const Homework1 = () => {

    const [form, handleChange] = useForm<FormValues>({
        login: '',
        password: '',
        rulesAccepted: false,
    });

    const [errors, setErrors] = useState<FormErrors>({
        login: [],
        password: [],
        rulesAccepted: []
    })

    const [succes, setSucces] = useState(false);

    const { login, password, rulesAccepted } = form;

    const hanldeSubmit = (e: FormEvent) => {
        e.preventDefault();
        let isSucces = true;

        const newErrors: FormErrors = {
        login: [],
        password: [],
        rulesAccepted: []
        }

        if (!login) {
            newErrors.login.push('field required!')
            isSucces = false;
        }
        if (login.length < 3) {
            newErrors.login.push('at least 3 signs length!')
            isSucces = false;

        }

        if (!password) {
            newErrors.password.push('field required!')
            isSucces = false;

        }
        if (password.length < 3) {
            newErrors.password.push('at least 3 signs length!')
            isSucces = false;

        }

        const regex = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/g);

        if (!regex.test(password)) {
            newErrors.password.push('password required small, big letter and special sign!')
            isSucces = false;
        }

        if (!rulesAccepted) {
            newErrors.rulesAccepted.push('accept rules required!')
            isSucces = false;
        }

        setErrors(newErrors);
        setSucces(isSucces);
    }

    return <form onSubmit={hanldeSubmit}>
        {succes && <p>Your registration is done!</p>}
        <Field type='text' name='login' label='login' onChange={handleChange} value={login} errors={errors.login} />
        <Field type='password' name='password' label='password' onChange={handleChange} value={password} errors={errors.password} />
        <Checkbox name='rulesAccepted' label='accept rules' onChange={handleChange} checked={rulesAccepted} errors={errors.rulesAccepted} />
        
        <button type='submit'>send</button>
    </form>
}
