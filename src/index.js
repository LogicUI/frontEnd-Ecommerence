import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import TabsProvider from './global/Tabs';
import CartProvider from './global/Cart';
import CheckoutProvider from './global/Checkout';
import AuthProvider from './global/Authen';

ReactDOM.render(
  <AuthProvider>
    <CheckoutProvider>
      <CartProvider>
        <TabsProvider>
          <App />
        </TabsProvider>
      </CartProvider>
    </CheckoutProvider>
  </AuthProvider>,
  document.querySelector('#root')
);
