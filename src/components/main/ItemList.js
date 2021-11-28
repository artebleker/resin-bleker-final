import React from 'react'
import Item from './Item'


const ItemList = ({items}) => {
    return (
        <div className="container-fluid item-list-container">
          {  items.length > 0
            ? items.map(item => 
            <Item 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            price={item.price} 
            photo={item.photo} 
            stock={item.stock} 
            />)
            : 
            <div className="spinner-border"  role="status">
  <span className="visually-hidden"></span>
</div>
            // <p>Loading...</p>
            }
        </div>
    )
}

export default ItemList
