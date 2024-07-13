import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ProductList from './components/product/ProductList';
import TopRatedProducts from './components/product/TopRatedProducts';
import ProductDetails from './components/product/ProductDetails';
import Cart from './components/Cart/Cart';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AuthProvider from './context/AuthContext';
import ProductProvider from './context/ProductsContext';
import CartProvider from './context/CartContext';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <Header />
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/top-rated" component={TopRatedProducts} />
              <Route path="/product/:id" component={ProductDetails} />
              <Route path="/cart" component={Cart} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
            <Footer />
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
