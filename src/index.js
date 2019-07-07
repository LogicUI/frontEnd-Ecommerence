import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import TabsProvider from './global/Tabs';
import CartProvider from './global/Cart';
import CheckoutProvider from './global/Checkout';

ReactDOM.render(
  <CheckoutProvider>
    <CartProvider>
      <TabsProvider>
        <App />
      </TabsProvider>
    </CartProvider>
  </CheckoutProvider>,
  document.querySelector('#root')
);
