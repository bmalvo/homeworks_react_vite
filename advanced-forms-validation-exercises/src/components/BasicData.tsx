import { useFormContext } from "react-hook-form"
import { Input } from "./Input"
import { orderData } from "../schemas/order";
import { SectionHeader } from "../ui/SectionHeader";

export const BasicData = () => {

    const { register, formState: { errors } } = useFormContext<orderData>();

    return <>
        <div>
        <SectionHeader>Basic data</SectionHeader>
          <Input type="text" label="Name" {...register('basic.name')} error={errors.basic?.name } />
          <Input type="text" label="Lastname" {...register('basic.lastname')} error={ errors.basic?.lastname} />
          <Input type="number" label="Age" {...register('basic.age')} error={ errors.basic?.age} />
        </div>
    </>
}