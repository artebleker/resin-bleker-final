
import React, { useEffect, useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(0)

    useEffect(()=> {
        setCount(initial)
    }, [])

    const sumar = () => {
        if (count < stock) {
            setCount (count +1)
        }
    }

    const restar = () => {
        if (count > initial) {
            setCount (count -1)
        }
    }

    return (
        <section className="btn-group-vertical item-count">
            <div>
            <button onClick= {sumar}>+</button>
            <span className="fs-3">{count}</span>
            <button onClick= {restar}>-</button>
        </div>
        {
            stock?
            <button className=" fs-4 btn-primary" onClick={()=> onAdd(count)}> Agregar al carrito</button>
            :
            <button disabled className=" fs-4 btn-outline-primary"> Agregar al carrito</button>
        }

        </section>
    )
}

export default ItemCount
