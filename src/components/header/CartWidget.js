import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    let cantCart = 3
    return (
       <Link to='/cart'> <div className="cart">
            <a className="nav-link active fs-1 "><AiOutlineShoppingCart /></a>
          {
              cantCart>0 &&
              <span className="rounded-pill d-inline p-2 bg-primary text-white" >{cantCart}</span>

          }

        </div></Link>
    )
}

export default CartWidget
