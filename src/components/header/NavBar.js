import React, {memo} from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import sakuraTitulo from "../../asset/sakuraTitulo.png"
import SearchArea from './SearchArea'

const NavBar = () => {
    
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light nav-bar ">
          <div className="container-fluid">
          <Link className="navbar-brand" to='/'>
             <img src={sakuraTitulo} alt="Sakura Resin" title="Sakura Resin" width="200px"/>
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="nav-link active" to='/category/1'>Mascotas</Link> 
              <Link className="nav-link active" to='/category/2'>Llaveros</Link>
              <Link className="nav-link active" to='/category/3'>Articulos</Link>
          </ul>
          <SearchArea /> 
          <CartWidget />
              </div>  
        </nav>  
        </>
    )
}

export default memo(NavBar)
