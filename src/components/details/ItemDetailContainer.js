// Traer los datos de db (data base) de firestoreFetch para usarlos en ItemDetail

import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { firestoreFetchOne } from "../../utils/firestoreFetch";

const ItemDetailContainer = () => {
  const [dato, setDato] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    firestoreFetchOne(idItem)
      .then((result) => setDato(result))
      .catch((err) => console.log(err));
  }, []);

  return <ItemDetail item={dato} />;
};

export default ItemDetailContainer;
