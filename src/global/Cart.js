import React, { useState, createContext } from 'react';

export const CartStore = createContext();
const Cart = (props) => {
  const [cartValue, setCart] = useState(0);
  const [cartItems, setItems] = useState({});
  const [totalPrice, setTotal] = useState(0);

  const incrementCart = () => {
    setCart((prev) => prev + 1);
  };

  const incrementTotalPrice = (price) => {
    setTotal((prev) => prev + price);
  };

  const addToCart = (name, item) => {
    console.log(name, item);
    setItems((prev) => {
      return {
        ...prev,
        [name]: { item }
      };
    });
  };

  const emptyCart = () => {
    setItems({});
    setCart(0);
    setTotal(0);
  };

  return (
    <CartStore.Provider
      value={{
        cartValue,
        incrementCart,
        addToCart,
        emptyCart,
        cartItems,
        incrementTotalPrice,
        totalPrice
      }}
    >
      {props.children}
    </CartStore.Provider>
  );
};

export default Cart;
