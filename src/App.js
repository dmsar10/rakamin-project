import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './View/Home';
import About from './View/About';
import Product from './View/Product';

function App() {
  return (
    <div>
      <Router>

        <Header />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/product/:id">
            <Product />
          </Route>

        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
