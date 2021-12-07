// Toma los datos de firestoreFetch para armar los detalles del item seleccionado

import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import firestoreFetch from "../../utils/firestoreFetch";
const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    firestoreFetch(idCategory)
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [idCategory]);

  useEffect(() => {
    return () => {
      setDatos([]);
    };
  }, []);

  return (
    <main className="container-fluid">
      <ItemList items={datos} />
    </main>
  );
};

export default ItemListContainer;
