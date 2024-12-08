import { FormProvider, useForm } from "react-hook-form";
import { orderData, orderSchema } from "./schemas/order";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "./components/Input";
import { RadioButton } from "./components/RadioButton";
import { BasicData } from "./components/BasicData";

export const App = () => {

  const methods = useForm<orderData>({
    
    resolver: yupResolver(orderSchema)
  });

  const { register, handleSubmit, watch, formState: { errors } } = methods;

  console.log(errors);

  const onSubmit = (data: orderData) => {

    console.log(data)
  }

  const type = watch('payment.type');

  return <>
    <h1>Place your order</h1>
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BasicData />
      <div>
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
    </FormProvider>
  </>;
}