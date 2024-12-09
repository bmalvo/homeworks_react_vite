import { useFormContext } from "react-hook-form"
import { Input } from "./Input"
import { orderData } from "../schemas/order";
import { SectionHeader } from "../ui/SectionHeader";
import { Section } from "../ui/Section";
import { FormElements } from "../ui/FormElements";

export const BasicData = () => {

    const { register, formState: { errors } } = useFormContext<orderData>();

    return <>
        <Section>
        <SectionHeader>Basic data</SectionHeader>
        <FormElements>
          <Input type="text" label="Name" {...register('basic.name')} error={errors.basic?.name } />
          <Input type="text" label="Lastname" {...register('basic.lastname')} error={ errors.basic?.lastname} />
          <Input type="number" label="Age" {...register('basic.age')} error={ errors.basic?.age} />
        </FormElements>
        </Section>
    </>
}