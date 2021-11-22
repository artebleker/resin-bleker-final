import React, {useState} from "react";
// import ItemDetail from '../details/ItemDetail'

function SearchArea({keywords}) {
    const [keyword, setKeyword] = React.useState("");
    const [data, setdata] = React.useState(keywords);

    function submitHandler(e) {
        e.preventDefault();
        // let filterdata = keywords.filter(
        //     video => video.title.toLowerCase().includes(keyword.toLowerCase())
        // );
        // setdata(filterdata);
    }

        return (
            <div>
                <form
                onSubmit={submitHandler}
                >
                <label htmlFor="keyword">
               
                <input
                    id="keyword"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                </label>
                <button className="btn border-primary">Buscar</button>
            </form>
            {/* <ItemDetail keyword={keyWords}/>            */}
            </div>
        );
};

export default SearchArea;