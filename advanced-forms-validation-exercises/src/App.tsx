import { FormProvider, useForm } from "react-hook-form";
import { orderData, orderSchema } from "./schemas/order";
import { yupResolver } from "@hookform/resolvers/yup";
import { BasicData } from "./components/BasicData";
import { PaymentData } from "./components/PaymentData";
import { Button } from "./ui/Button";
import { PageHeader } from "./ui/PageHeader";
import { Container } from "./ui/Container";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import { theme } from "./theme";


export const App = () => {

  const methods = useForm<orderData>({
    
    resolver: yupResolver(orderSchema)
  });

  const { handleSubmit, formState: { errors } } = methods;

  console.log(errors);

  const onSubmit = (data: orderData) => {

    console.log(data)
  }

  return <ThemeProvider theme={theme}>
    <GlobalStyles styles={{
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      }
    }} />
    <Container>
    <PageHeader>Place your order</PageHeader>
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BasicData />
        <PaymentData />
      <Button type="submit">Place Your order</Button>
      {/* <button type="submit">Place Your order</button> */}
    </form>
    </FormProvider>
  </Container>;
    </ThemeProvider>
}