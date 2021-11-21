import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from '../src/components/details/ItemDetailContainer'
import ItemListContainer from '../src/components/main/ItemListContainer'
import NavBar from "./components/header/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'

function App() {
  return (
    <>
    <BrowserRouter>
<NavBar />
<Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
    <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
