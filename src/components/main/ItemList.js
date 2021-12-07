// Distribuye información para el renderizado de cada Item

import React, { memo } from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="container-fluid item-list-container">
      {items.length > 0 ? (
        items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            photo={item.photo}
            stock={item.stock}
          />
        ))
      ) : (
        <div className="spinner-border container-fluid" role="status">
          <span className="visually-hidden"></span>
        </div>
      )}
    </div>
  );
};

export default memo(ItemList);
