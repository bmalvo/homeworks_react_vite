import { Link } from "@tanstack/react-router"
import { PageHeader } from "../components/PageHeader"

export const Home = () => {
  return <>
    <PageHeader>Begin your process</PageHeader>
    <p>You can start your order by clicking this button:</p>
    <Link to='/order'>start order</Link>
  </>
}