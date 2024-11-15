import { useState } from 'react';
import aireAcond from './assets/aireAcondicionado.png';
import Cart from './cart';
import './App.css';

function App() {
  const [count, setCount] = useState(0); // Estado para la cantidad del producto
  const [cart, setCart] = useState([]);  // Estado para el carrito de compras

  const agregarAlCarro = () => {
    const producto = {
      nombre: 'Aire Acondicionado',
      cantidad: count,
    };

    setCart((prevCart) => {
      const itemExistente = prevCart.find((item) => item.nombre === producto.nombre);

      if (itemExistente) {
        return prevCart.map((item) =>
          item.nombre === producto.nombre ? { ...item, cantidad: item.cantidad + count }: item);
      } else {
        return [...prevCart, producto];
      }
    });
    alert('Producto agregado al carrito');
    setCount(0);
  };

  return (
    <>
      <div className="divCard">
        <div>
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={aireAcond} className="logo" alt="electrodoméstico" />
          </a>
        </div>
        <h3>Nombre del producto: Aire Acondicionado</h3>
        <div className="card">
          Cantidad: {count} <br />
          <button onClick={() => setCount((prev) => Math.max(prev - 1, 0))}>-</button>
          <button onClick={() => setCount((prev) => prev + 1)}>+</button><br />
          <button onClick={agregarAlCarro}>Agregar al carro</button>
        </div>
      </div>

      {/* Componente del carrito */}
      <Cart cartItems={cart} />
    </>
  );
}

export default App;


