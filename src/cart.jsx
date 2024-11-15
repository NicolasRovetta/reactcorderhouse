import React from 'react';
import cart from './assets/cart.png';
import './cart.css'

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <a>
        <img src={cart} alt="Carrito de compras"/>
      </a>
    </div>
  );
}

export default Cart;

