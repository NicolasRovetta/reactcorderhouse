import { useState } from 'react';
import Cart from './cart';
import './App.css';

function App() {
  // Lista de productos con nombres y rutas de imágenes
  const productos = [
    { nombre: 'Aire Acondicionado', imagen: '/src/assets/aireAcondicionado.png' },
    { nombre: 'Batidora', imagen: '/src/assets/batidora.png' },
    { nombre: 'Cafetera', imagen: '/src/assets/cafetera.png' },
    { nombre: 'Cocina a Gas', imagen: '/src/assets/cocinaGas.png' },
    { nombre: 'Extractor', imagen: '/src/assets/extractor.png' },
    { nombre: 'Heladera', imagen: '/src/assets/heladera.png' },
    { nombre: 'Lavarropas', imagen: '/src/assets/lavaropas.png' },
    { nombre: 'Lavavajilla', imagen: '/src/assets/lavavajilla.png' },
    { nombre: 'Licuadora', imagen: '/src/assets/licuadora.png' },
    { nombre: 'Microondas', imagen: '/src/assets/microondas.png' },
    { nombre: 'Pava Eléctrica', imagen: '/src/assets/pavaElectrica.png' },
    { nombre: 'Refrigerador', imagen: '/src/assets/refrigerador.png' },
    { nombre: 'Ventilador', imagen: '/src/assets/ventilador.png' },
  ];

  const [cart, setCart] = useState([]); // Estado para el carrito

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto, cantidad) => {
    if (cantidad <= 0) {
      alert('Selecciona al menos 1 producto');
      return;
    }

    setCart((prevCart) => {
      const itemExistente = prevCart.find((item) => item.nombre === producto.nombre);
      if (itemExistente) {
        return prevCart.map((item) =>
          item.nombre === producto.nombre
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        return [...prevCart, { ...producto, cantidad }];
      }
    });

    alert(`"${producto.nombre}" agregado al carrito`);
  };

  return (
    <>
      {/* Renderiza dinámicamente los productos */}
      <div className="productos">
        {productos.map((producto) => (
          <ProductCard
            key={producto.nombre} // Clave única
            producto={producto}
            onAddToCart={agregarAlCarrito}
          />
        ))}
      </div>

      {/* Componente del carrito */}
      <Cart cartItems={cart} />
    </>
  );
}

// Componente de tarjeta reutilizable para cada producto
function ProductCard({ producto, onAddToCart }) {
  const [count, setCount] = useState(0); // Estado para la cantidad

  return (
    <div className="divCard">
      <div>
        <img src={producto.imagen} className="logo" alt={producto.nombre} />
      </div>
      <h3>{producto.nombre}</h3>
      <div className="card">
        Cantidad: {count} <br />
        <button className="buttonMenos" onClick={() => setCount((prev) => Math.max(prev - 1, 0))}>-</button>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button><br />
        <button className="card" onClick={() => onAddToCart(producto, count)}>
          Agregar al carro
        </button>
      </div>
    </div>
  );
}

export default App;



