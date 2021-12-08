// Renderiza el buscador de palabras claves

import React, { useState, useContext } from "react";
import { SearchAreaContext } from "./SearchAreaContext";


function SearchArea() {
  const test=useContext(SearchAreaContext)
  const [keyword, setKeyword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
    test.setQToSearch(keyword)
    console.log(keyword);
  
   };

  // Funcion para prohibir cualquier tecla que No sea del alfabeto

  // const handleChange = (e) => {
  //   let prohibido = /^[A-Za-z]$/;
  //   if (!prohibido.test(e.key)) {
  //     console.log("Prohibido:", e.key);
  //     e.preventDefault();
  //   }
  //   setKeyword(e.target.value);
  // };
 
  return (
      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="keyword">
            <input
              id="keyword"
              // onKeyDown={handleChange}
              onChange={(e) => setKeyword(e.target.value)} 
            />
          </label>
          <button className="btn border-primary" 
          onClick={()=> document.getElementById("keyword").value=null}>Buscar</button>
        </form>
      </div>
  );
}
export default SearchArea;

