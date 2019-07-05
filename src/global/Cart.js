import React, { useState, createContext, useEffect } from 'react';

export const CartStore = createContext();
const Cart = (props) => {
  const [cartValue, setCart] = useState(0);
  const [cartItems, setItems] = useState({});
  const incrementCart = () => {
    setCart((prev) => prev + 1);
  };

  const addToCart = (name, item) => {
    setItems((prev) => {
      return {
        ...prev,
        [name]: { item }
      };
    });
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const emptyCart = () => {
    setItems({});
    setCart(0);
  };

  return (
    <CartStore.Provider
      value={{
        cartValue,
        incrementCart,
        addToCart,
        emptyCart,
        cartItems
      }}
    >
      {props.children}
    </CartStore.Provider>
  );
};

export default Cart;
