// Toma los datos de firestoreFetch para armar los detalles del item seleccionado

import React, { useEffect, useState, useContext } from "react"; //useContext
import ItemList from "./ItemList";
import { useParams } from "react-router";
import firestoreFetch from "../../utils/firestoreFetch";
import { SearchAreaContext } from "../header/SearchAreaContext";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();
  const test = useContext(SearchAreaContext);
  //// console.log("qToSearch: ", test.qToSearch);
  let resolve;
  let testOrId = 0;
  if (test.qToSearch) {
    resolve = test.qToSearch;
    testOrId = 1;
  } else {
    resolve = idCategory;
    testOrId = 0;
  }

  useEffect(() => {
    firestoreFetch(resolve, testOrId)
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [resolve]);

  return (
    <main className="container-fluid">
      <ItemList items={datos} />
    </main>
  );
};

export default ItemListContainer;
