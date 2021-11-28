import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router'
import customFetch from '../../utils/customFetch'
const {data} = require('../../utils/data').default

const ItemListContainer = () => {

const [datos, setDatos] = useState([])
const {idCategory} = useParams()
useEffect(()=> {
    customFetch(2000, data.filter(item => {
        if (idCategory === undefined) 
            return item
            return item.categoryId === parseInt(idCategory)
    }))
    .then(result => setDatos(result))
    .catch(err => console.log (err))
}, [idCategory])
    return (
        <main className="container-fluid">
            <ItemList items= {datos} />
        </main>
    )
}

export default ItemListContainer
