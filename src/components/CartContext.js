import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, quantity) => {
        if(cartList.find(el => el.id === item.id)){
            for(let i = 0; i <= cartList.length; i++){
                if(item.id === cartList[i].id){
                    cartList[i].qty += quantity;
                    cartList[i].total_price = cartList[i].qty * cartList[i].unit_price;  
                }
            }
            setCartList(cartList);
        }else{
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
            ])
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
        const quantity = cartList.reduce(((acc, product) => acc + product.qty), 0);
        return quantity;
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, deleteThis, deleteAll, productsQtyInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;