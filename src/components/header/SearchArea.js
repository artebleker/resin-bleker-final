import React, {useState} from "react";

const {data} = require ('../../utils/data')
function SearchArea() {
    const [keyword, setKeyword] = useState("");
   

            const submitHandler = (e) => {
                    e.preventDefault();
                    for (let i =0; i< data.length; i++){
                let filtro = data.filter(
                    keyword => keyword[i].keyWords.includes(keyword)
                )
                setKeyword(filtro)
            }
            console.log(keyword)
    }

    const handleChange = (e) => {
        let prohibido = ["0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","&","/","=","?","¡","¿",",","+","-", " ", '"',"'",".","*"]
        if (prohibido.includes(e.key)) {
            console.log("Prohibido:",e.key);
            e.preventDefault();
        }
    }

        return (
            <div>
                <form
              onSubmit={submitHandler}
                >
                <label htmlFor="keyword">
               
                <input
                    id="keyword"
                    onKeyDown={handleChange}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                </label>
                <button className="btn border-primary"   >Buscar</button>
            </form>
          
            </div>
        );
};

export default SearchArea;