import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Home from './Home';
import Games from './Games';
import Consoles from './Consoles';
import Videos from './Videos';

const App = () => {
  return (
    <section>
      <Router>
        <Hero />
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/games" component={Games} />
        <Route path="/consoles" component={Consoles} />
        <Route path="/videos" component={Videos} />
      </Router>
    </section>
  );
};

export default App;
