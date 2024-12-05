import { useState } from "react";
import { useForm } from "react-hook-form"

type FormData = {

  name: string;
  surname: string;
  invoice: boolean;
  nip?: string;
}

export const App = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const [ submittedData, setSubmittedData ] = useState<FormData>();
  
  const onSubmit = (data: FormData) => {

    setSubmittedData(data);
  }

  const invoiceNeeded = watch('invoice')


  return <>
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register('name', { required: true })} />
        {errors.name ? <p>Field is required</p>: null}
      </div>
      <div>
        <label htmlFor="surname">Surename</label>
        <input type="text" id="surname" {...register('surname', { required: true })} />
        {errors.surname ? <p>Surname is required</p>: null}
      </div>
      <div>
        <label htmlFor="invoice">I want an invoice
          <input type="checkbox" {...register('invoice')} /></label>
      </div>
        {/* {invoiceNeeded ? */}
          <div>
        <label htmlFor="nip">NIP</label>
          <input type="text" id="nip" {...register('nip', {
            validate: {
              required: value => invoiceNeeded ? !!value || 'Field is required' : true,
              minLength: value => invoiceNeeded ? value && value?.length >= 10 || 'NIP has 10 numbers!' : true
        }})} />
          </div>
        {/* : null} */}
      <button type="submit">Order</button>
      </form>
      {submittedData ? <p>{submittedData.name} {submittedData.surname} {submittedData.invoice ? submittedData.nip : 'no invoice'}</p>: null}
    </div>
  </>
}
