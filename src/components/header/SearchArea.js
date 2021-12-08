// Renderiza el buscador de palabras claves

import React, { useState, createContext } from "react";

export const searchArea = createContext()

function SearchArea() {
  const [keyword, setKeyword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
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
        <button className="btn border-primary">Buscar</button>
      </form>
    </div>
  );
}
export default SearchArea;

