import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let position = cart.findIndex(product => product.id === item.id);
            cart[position].cantidad += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, cantidad:quantity}]);
        }
    };

    const removeItem = (id) => {
        const items = cart.filter(product => product.id !== id);
        setCart([...items]);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    };

    const sumItemsCart = () => {
        return cart.reduce((acc, item) => acc += item.cantidad, 0);
    }

    const totalCart= () => {
        return cart.reduce((acc, item) => acc += item.cantidad * item.precio, 0);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, totalCart, sumItemsCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;