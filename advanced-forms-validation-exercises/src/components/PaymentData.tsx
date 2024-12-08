import { useFormContext } from "react-hook-form";
import { Input } from "./Input"
import { RadioButton } from "./RadioButton"
import { orderData } from "../schemas/order";

export const PaymentData = () => {

    const { register, watch} = useFormContext<orderData>();

  const type = watch('payment.type');

    return <>
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
    </>
}