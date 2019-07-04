import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Home from './Home';
import Games from './Games';
import Consoles from './Consoles';
import Videos from './Videos';
import { Store } from '../global/Tabs';

const App = () => {
  const hook = useContext(Store);
  return (
    <section>
      <Hero />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              hook.handleLoad(0);
              return <Home />;
            }}
          />
          <Route
            path="/games"
            render={() => {
              hook.handleLoad(1);

              return <Games />;
            }}
          />
          <Route
            path="/videos"
            render={() => {
              hook.handleLoad(2);

              return <Videos />;
            }}
          />
          <Route
            path="/consoles"
            render={() => {
              hook.handleLoad(3);

              return <Consoles />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </section>
  );
};

export default App;
