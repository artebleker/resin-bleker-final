//  Renderizado del item detallado

import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../cart/CartContext";
import { Link } from "react-router-dom";
const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

  const onAdd = (count) => {
    alert("Llevas " + count + " " + item.name + "/s");
    setItemCount(count);
    test.addToCart(item, count);
  };

  return (
    <>
      {item && item.photo ? (
        <div className="container-fluid item-detail">
          <h1 className="fs-1">{item.name}</h1>
          <img src={item.photo} alt="imagen"></img>

          <section>
            <p>{item.description}</p>
            <p>$ {item.price}</p>
            <p>Stock {item.stock}</p>
            {itemCount === 0 ? (
              <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
            ) : (
              <Link to="/cart">
                <button>Ir al carrito</button>
              </Link>
            )}
          </section>
        </div>
      ) : (
        <div className="spinner-border " role="status">
          <span className="visually-hidden"></span>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
