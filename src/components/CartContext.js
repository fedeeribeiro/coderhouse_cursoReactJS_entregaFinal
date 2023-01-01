import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, quantity) => {
        const found = cartList.find(product => product.id === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    id: item.id,
                    name:item.name,
                    img: item.image,
                    qty: quantity,
                    unit_price: item.price,
                    total_price: item.price * quantity
                }
            ]);
        } else {
            found.qty += quantity;
            setCartList([
                ...cartList
            ]);
        }
    }

    const deleteThis = (id) => {
        const newCartList = cartList.filter(item => item.id !== id);
        setCartList(newCartList);
    }

    const deleteAll = () => {
        setCartList([]);
    }

    const productsQtyInCart = () => {
        const quantities = cartList.map(item => item.qty);
        return quantities.reduce(((acc, productQuantity) => acc + productQuantity), 0);
    }

    const orderTotalPrice = () => {
        const prices = cartList.map(item => item.total_price);
        return prices.reduce(((acc, productTotalPrice) => acc + productTotalPrice), 0);
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            deleteThis,
            deleteAll,
            productsQtyInCart,
            orderTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;