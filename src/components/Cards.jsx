import React from 'react'
import { useContext } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';
import { Container, Typography} from '@mui/material';


export const Cards = () => {
    const { products } = useContext(FirebaseContext)
  return (
    <Container sx={{display:"grid", gridTemplateColumns: "repeat(3, auto)", gap:"3em"}}>
    {products.map(product => (
      <Container key={product.id} sx={{border:"2px solid"}}>
        <Typography>{product.id}</Typography>
        <Typography>{product.description}</Typography>
        <Typography>{product.name}</Typography>
        <Typography>{product.price}</Typography>
      </Container>
    ))}
  </Container>
  )
}
