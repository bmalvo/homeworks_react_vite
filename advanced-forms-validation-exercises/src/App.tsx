import { useForm } from "react-hook-form";
import { orderData, orderSchema } from "./schemas/order";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "./components/Input";
import { RadioButton } from "./components/RadioButton";

export const App = () => {

  const { register, handleSubmit, watch,  formState: {errors} } = useForm<orderData>({
    
    resolver: yupResolver(orderSchema)
  });

  console.log(errors);

  const onSubmit = (data: orderData) => {

    console.log(data)
  }

  const type = watch('payment.type');

  return <>
    <h1>Place your order</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2>Basic data</h2>
        <div>
          <Input type="text" label="Name" {...register('basic.name')}/>
          <Input type="text" label="Lastname" {...register('basic.lastname')}/>
          <Input type="number" label="Age" {...register('basic.age')}/>
        </div>
        <h2>Payment data</h2>
        <RadioButton value="card" label="Card" {...register('payment.type')} />
        <RadioButton value="transfer" label="Transfer" {...register('payment.type')} />
        {type === 'card' ? <div>
          <RadioButton value="visa" label="VISA" {...register('payment.details.card')} />
          <RadioButton value="amex" label="AMEX" {...register('payment.details.card')} />
          <Input type="text" label="Card number" {...register('payment.details.cardNumber')} />
        </div> : null}
        {type === 'transfer' ? <label>IBAN<Input type="text" label="IBAN" {...register('payment.details.iban')} /></label> : null}
      </div> 
      <button type="submit">Place Your order</button>
    </form>
  </>;
}