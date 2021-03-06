import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../src/components/details/ItemDetailContainer";
import ItemListContainer from "../src/components/main/ItemListContainer";
import NavBar from "./components/header/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Cart from "./components/cart/Cart";
import CartContextProvider from "./components/cart/CartContext";
import SearchAreaContextProvider from "./components/header/SearchAreaContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <SearchAreaContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route
                path="/resin-bleker-final"
                element={<ItemListContainer />}
              />
              <Route
                path="/category/:idCategory"
                element={<ItemListContainer />}
              />
              <Route path="/item/:idItem" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </SearchAreaContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
