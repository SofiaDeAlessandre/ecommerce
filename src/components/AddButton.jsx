import { Button } from '@mui/material';
import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FirebaseContext } from '../context/FirebaseContext';
import { CartContext } from '../context/CartContext';

export const AddButton = () => {

const { id } = useParams();
const { products } = useContext(FirebaseContext);
const { handleAdd} = useContext(CartContext)

const product = products.find((product) => product.id === id);
// const handleAdd = () => {
//    setAdd(product)
    console.log(product)
// }
    return (
    <Button onClick={()=>handleAdd(product)}>
     Añadir al carrito
    </Button>
  )
}

export default AddButton