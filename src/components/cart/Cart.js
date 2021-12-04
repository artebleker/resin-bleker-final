import React, { useContext } from "react";
import {CartContext} from "../cart/CartContext";
import { Link } from "react-router-dom";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../../utils/firebaseConfig';
const Cart = () => {
  const test = useContext(CartContext);

  const createOrder = () => {
    const itemsForDB = test.cartList.map(item => ({
      id: item.idItem,
      title: item.nameItem,
      price: item.costItem
    }))

    test.cartList.forEach(async (item)=>{
      const itemRef = doc(db, "data", item.idItem)
      await updateDoc(itemRef, {
        stock: increment(-item.countItem)
      })
    })
    let order = {
      buyer: {
        name:"Maka Albarn",
        email: "soul.eater@shinbunsen.com",
        phone: "4242564"
      },
      total: test.calcTotal(),
      items: itemsForDB,
      date: serverTimestamp()
    }
    console.log(order);

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    }

createOrderInFirestore()
.then(result=>alert(`Su compra fue realizada. Orden: ${result.id}`))
.catch(err=>console.log(err))
test.removeList()
  }

  return (
    <section className="container cart-section">
        <h1>Lista de compras</h1>
     
      <div>
          {
              test.cartList.length> 0 &&
                test.cartList.map(item =>
                    <article className="cart-div container-fluid" key={item.idItem}>
                            <img src={item.imgItem} alt='imagen'></img>
                                <h3 title={`Producto: ${item.nameItem}`}> {item.nameItem}</h3>
                        <div>
                            {
                              item.countItem ===1 ?
                              <span>{item.countItem} item</span>
                              :
                              <span>{item.countItem} items / $ {item.costItem} each</span> 
                            }
                            <h4>$ {test.calcTotalPerItem(item.idItem)}</h4>
                        </div>
                            <button className="btn btn-danger btn-sm" onClick={() => test.deleteItem(item.idItem)}>X</button>
                    </article>
                    )
                   
          }
      </div>
{
    test.cartList.length > 0 &&
    <article>
        <h2>Orden de compra</h2>
        <div>
            <h3>Subtotal</h3>
            <h4>$ {test.calcSubTotal()} </h4>
        </div>
        <div>
            <h3>Impuestos</h3>
            <h4>$ {test.calcTaxes()} </h4>
        </div>
        <div>
            <h3>Descuentos</h3>
            <h4>-$ {test.calcDiscount()} </h4>
        </div>
        <div>
            <h2><b>TOTAL</b></h2>
            <h3>$ {test.calcTotal()} </h3>
        </div>
        <div>
        <Link to='/'>
          <button className="btn btn-primary">Seguir comprando</button>
        </Link>
        {test.cartList.length > 0 ? (
          <button className="btn btn-danger" onClick={test.removeList}>Borrar lista de compras</button>
        ) : (
          <p>No hay nada en el carrito</p>
        )}
      </div>

        <Link to='/'><button className="btn btn-success btn-lg" onClick={createOrder} ><b>COMPRAR</b></button></Link>
    </article>
}
    </section>
  );
};

export default Cart;