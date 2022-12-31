import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const { cartList, deleteThis, deleteAll } = useContext(CartContext);

    return (
        <>
            <h1>Este es tu carrito.</h1>
            {
                (cartList.length !== 0) && <button onClick={() => deleteAll()}>Eliminar todo</button>
            }
            <ul>
                {
                    cartList.length === 0 ? <p>Tu carrito está vacío.</p>
                    : cartList.map(item => <li key={item.id}>{item.qty} unidades de {item.name} - <button onClick={() => deleteThis(item.id)}>Eliminar</button></li>)
                }
            </ul>
        </>
    )
}

export default Cart;