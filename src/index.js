import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import TabsProvider from './global/Tabs';
import CartProvider from "./global/Cart";

ReactDOM.render(
  <CartProvider>
  <TabsProvider>
    <App />
  </TabsProvider>
  </CartProvider>
  ,
  document.querySelector('#root')
);
