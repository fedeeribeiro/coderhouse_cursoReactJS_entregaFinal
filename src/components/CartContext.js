import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { createContext, useState } from 'react';
import { db } from '../utils/firebaseConfig';

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
            found.total_price += quantity * found.unit_price;
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

    const createOrder = () => {
        const order = {
            buyer: {
                name: 'Lionel Messi',
                email: 'lionelmessi@coderhouse.com',
                phone: 5491194032854
            },
            date: serverTimestamp(),
            items: cartList.map(item => ({
                id: item.id,
                title: item.name,
                price: item.unit_price,
                qty: item.qty
            })),
            total: orderTotalPrice()
        }

        const setDocInFirestore = async () => {
            const newOrderRef = doc(collection(db, 'orders'));
            await setDoc(newOrderRef, order);
            return newOrderRef
        }
        
        setDocInFirestore()
        .then(result => {
            alert('La orden con id:' + result.id + ' ha sido creada exitosamente.');
            cartList.forEach(async(item) => {
                const itemRef = doc(db, 'products', item.id);
                await updateDoc(itemRef, {
                    stock: increment(-item.qty)
                })
            });
            deleteAll()
        })
        .catch(error => console.log(error))
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            createOrder,
            deleteThis,
            deleteAll,
            orderTotalPrice,
            productsQtyInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;