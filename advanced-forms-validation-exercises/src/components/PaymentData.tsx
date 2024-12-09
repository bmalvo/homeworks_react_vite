import { useFormContext } from "react-hook-form";
import { Input } from "./Input"
import { orderData } from "../schemas/order";
import { RadioGroup } from "../ui/RadioGroup";

export const PaymentData = () => {

    const { register, watch, control, formState: {errors}} = useFormContext<orderData>();

    const type = watch('payment.type');

    return <>
        <div>
        <h2>Payment data</h2>
        <RadioGroup
          name='payment.type'
          control={control}
          options={[
          { value: 'card', label: 'Card' },
          {value: 'transfer', label: 'Transfer'}
        ]}/>
        {/* <RadioButton value="card" label="Card" {...register('payment.type')} />
        <RadioButton value="transfer" label="Transfer" {...register('payment.type')} /> */}
        {type === 'card' ? <div>
          <RadioGroup
            name='payment.details.card'
            control={control}
          options={[
          { value: 'visa', label: 'Visa' },
          {value: 'amex', label: 'AMEX'}
        ]}/>
          {/* <RadioButton value="visa" label="VISA" {...register('payment.details.card')} />
          <RadioButton value="amex" label="AMEX" {...register('payment.details.card')} /> */}
                <Input type="text" label="Card number" {...register('payment.details.cardNumber')} error={ errors.payment?.details?.cardNumber} />
        </div> : null}
            {type === 'transfer' ? <label>IBAN<Input type="text" label="IBAN" {...register('payment.details.iban')} error={ errors.payment?.details?.iban} /></label> : null}
      </div> 
    </>
}