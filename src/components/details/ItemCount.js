// Funciones para agregar o restar productos, renderizado de los botones funcionales para la compra

import React, { useEffect, useState } from "react";

const ItemCount = ({ stock, initial=0, onAdd }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(initial);
  }, []);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <section className="btn-group-vertical item-count">
      <div>
        <button onClick={sumar}>+</button>
        <span className="fs-3">{count}</span>
        <button onClick={restar}>-</button>
      </div>
      {stock > 0 ? (
        <button className=" fs-4 btn-primary" onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      ) : (
        <button disabled className=" fs-4 btn-outline-primary">
          Agregar al carrito
        </button>
      )}
    </section>
  );
};

export default ItemCount;
