// Renderiza el buscador de palabras claves

import React, { useState } from "react";

function SearchArea() {
  const [keyword, setKeyword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(keyword);
    return keyword
  };
  const handleChange = (e) => {
    let prohibido = /^[A-Za-z]$/;
    if (!prohibido.test(e.key)) {
      console.log("Prohibido:", e.key);
      e.preventDefault();
    }
    setKeyword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="keyword">
          <input
            id="keyword"
            onKeyDown={handleChange}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </label>
        <button className="btn border-primary">Buscar</button>
      </form>
    </div>
  );
}
export default SearchArea;

