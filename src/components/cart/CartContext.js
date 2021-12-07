// Contexto para renderizar el Cart, armado de todas las funciones

import React, { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const addToCart = (item, count) => {
    let found = cartList.find((product) => product.idItem === item.id);
    if (found === undefined) {
      setCartList([
        ...cartList,
        {
          idItem: item.id,
          imgItem: item.photo,
          nameItem: item.name,
          costItem: item.price,
          countItem: count,
        },
      ]);
    } else {
      found.countItem += count;
      setCartList([...cartList]);
    }
  };

  const removeList = () => setCartList([]);

  const deleteItem = (id) => {
    let res = cartList.filter((item) => item.idItem !== id);
    setCartList(res);
  };
  const calcTotalPerItem = (idItem) => {
    let index = cartList.map((item) => item.idItem).indexOf(idItem);
    return cartList[index].costItem * cartList[index].countItem;
  };
  const calcSubTotal = () => {
    let totalPerItem = cartList.map((item) => calcTotalPerItem(item.idItem));
    return totalPerItem.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  };
  const calcTaxes = () => {
    return calcSubTotal() * 0.21;
  };

  const calcDiscount = () => {
    return calcSubTotal() * 0.1;
  };

  const calcTotal = () => {
    return calcSubTotal() + calcTaxes() - calcDiscount();
  };

  const calcItemsCount = () => {
    let count = cartList.map((item) => item.countItem);
    return count.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeList,
        deleteItem,
        calcTotalPerItem,
        calcSubTotal,
        calcTaxes,
        calcTotal,
        calcDiscount,
        calcItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
