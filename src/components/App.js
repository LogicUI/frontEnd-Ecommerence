import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';

const App = () => {
  return (
    <section>
      <Hero />
      <Header />
    </section>
  );
};

export default App;
