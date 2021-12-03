import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'
// import customFetch from '../../utils/customFetch'
import {firestoreFetchOne} from '../../utils/firestoreFetch'

// const {data} = require('../../utils/data').default
const ItemDetailContainer = () => {
const [dato, setDato] = useState({})
const {idItem} = useParams()

// useEffect(()=> {
//     customFetch(1000, data.find(item => item.id === parseInt(idItem)))
//     .then(result => setDato(result))
//     .catch(err => console.log(err))
// },[]) //idItem

useEffect(()=>{
    firestoreFetchOne(idItem)
    .then(result=>setDato(result))
    .catch(err=>console.log(err))
},[])

    return (
      
         <ItemDetail item= {dato} />   
  
    )
}

export default ItemDetailContainer
