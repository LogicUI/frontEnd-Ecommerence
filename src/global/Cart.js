import React, { useState, createContext } from 'react';

export const CartStore = createContext();

const Cart = (props) => {
    const [cartValue,setCart] = useState(0);

    const incrementCart = () => {
        setCart(prev => prev + 1)
    }
    
    return (
        <CartStore.Provider
            value={{
                cartValue,
                incrementCart
            }}
        >
            {props.children}
        </CartStore.Provider>
    )

}

export default Cart;