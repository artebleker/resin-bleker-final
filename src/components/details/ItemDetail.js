import React from 'react'
import ItemCount from './ItemCount'
const ItemDetail = ({item}) => {
    return (
        <>
            {
                item && item.photo?
                <div className="container-fluid item-detail">
                <h1 className="fs-1">{item.name}</h1>
                <img src={item.photo}></img>
                <section>
                <p>{item.description}</p>
                <p>$ {item.price}</p>
                <p>Stock {item.stock}</p>
                <ItemCount stock={item.stock}/>
                </section>

                </div>
                :
                <div className="spinner-border "  role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
                // <p>Loading...</p>
                
            }
        </>
    )
}

export default ItemDetail
