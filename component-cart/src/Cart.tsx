import { CartElements } from "./CartElements"
import { CartHeader } from "./CartHeader"
import { CartSummary } from "./CartSummary"
import { CartItem } from "./types"

const Cart = () => {
    const elements: CartItem[] = [
        { id: 1, name: 'Jabłko', quantity: 10, price: 1.2 },
        {id: 2, name: 'Gruszka', quantity: 90, price: 1.7},
    ]

    return (
        <table>
            <CartHeader />
            <CartElements elements={ elements} />
            <CartSummary elements={ elements} />
        </table>
    )
}

export { Cart }
