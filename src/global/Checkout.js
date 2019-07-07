import React, { useState, createContext } from 'react';

export const Checkout = createContext();

const ShouldCheckOut = (props) => {
  const [checkOutCart, shouldCheckoutCart] = useState(false);

  const handleCheckOut = () => {
    shouldCheckoutCart(true);
  };

  const resetCheckOut = () => {
    shouldCheckoutCart(false);
  };

  return (
    <Checkout.Provider value={{ checkOutCart, handleCheckOut, resetCheckOut }}>
      {props.children}
    </Checkout.Provider>
  );
};

export default ShouldCheckOut;
