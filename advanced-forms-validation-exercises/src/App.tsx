import { useForm } from "react-hook-form";
import { orderData, orderSchema } from "./schemas/order";
import { yupResolver } from "@hookform/resolvers/yup";

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
          <input type="text" {...register('basic.name')}/>
          <input type="text" {...register('basic.lastname')}/>
          <input type="number" {...register('basic.age')}/>
        </div>
        <h2>Payment data</h2>
        <label>Card
        <input type="radio" {...register('payment.type')} value='card'/>
        </label>
        <label>Transfer
        <input type="radio" {...register('payment.type')} value='transfer'/>
        </label>
        {type === 'card' ? <div>
          <label>VISA
            <input type="radio" {...register('payment.card')} value='visa' />
          </label>
          <label>AMEX
            <input type="radio" {...register('payment.card')} value='amex' />
          </label>
          <input type="text" {...register('payment.cardNumber')} />
        </div> : null}
        {type === 'transfer' ? <label>IBAN<input type="text" {...register('payment.iban')} /></label> : null}
      </div> 
      <button type="submit">Place Your order</button>
    </form>
  </>;
}