
import React, { useEffect, useState } from 'react'

const ItemCount = ({stock}) => {

    const [count, setCount] = useState(0)

    useEffect(()=> {
        setCount(1)
    }, [])

    const sumar = () => {
        if (count < stock) {
            setCount (count +1)
        }
    }

    const restar = () => {
        if (count > 1) {
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
            <button className=" fs-4 btn-primary"> Agregar al carrito</button>
            :
            <button disabled className=" fs-4 btn-outline-primary"> Agregar al carrito</button>
        }

        </section>
    )
}

export default ItemCount
