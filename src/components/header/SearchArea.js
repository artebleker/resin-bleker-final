import React, { useState } from "react";
// const {data} = require('../../utils/data.js')
function SearchArea() {
  const [keyword, setKeyword] = useState("");
  const submitHandler = (e) => {
      e.preventDefault();
      console.log(keyword);
      
      // grabar en el estado global este keyword, en el contexto funcion que tome keyword como argumento
      // Revisar
      // import { query, where } from "firebase/firestore";
      // const q = query(citiesRef, where("regions", "array-contains", "west_coast"));
  };
  const handleChange = (e) => {
    let prohibido = /^[A-Za-z]$/
   
    if (!prohibido.test(e.key)) {
      console.log("Prohibido:", e.key);
      e.preventDefault();
    }
    setKeyword(e.target.value);

    console.log(keyword);
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

