import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart">
      {cart.items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;
