
import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({id, name, price, photo, stock}) => {
    return (
        <article>
        <Link to={`/item/${id}`}>  <img src={photo} className="img" alt="imagen" title={`Detalles de ${name}`}></img></Link>
            <h3>{name}</h3>
            <h5>$ {price}</h5>
            <p>Stock <b>{stock}</b></p>
           
        </article>
    )
}

export default Item
