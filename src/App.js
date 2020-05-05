import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import CartContextProvider from './contexts/CartContext';
import Nav from './components/Nav';
import MobileNav from './components/MobileNav';
import List from './components/List';
import CartDetail from './components/CartDetail';
import NavContextProvider from './contexts/NavContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <Route path='/'>
            <NavContextProvider>
              <Nav />
              <MobileNav />
            </NavContextProvider>
          </Route>
          <Route path='/' exact>
            <List />
          </Route>
          <Route 
            path='/checkout'
            component={ CartDetail }
            exact
          />

        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
