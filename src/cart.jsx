import React from 'react';

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h3>Carrito de compras:</h3>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index}>
            {item.nombre} - Cantidad: {item.cantidad}
          </div>
        ))
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
}

export default Cart;
