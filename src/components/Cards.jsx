import React from 'react'
import { useContext } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';
import { Container, Typography } from '@mui/material';


export const Cards = () => {
    const { products } = useContext(FirebaseContext)
  return (
    <Container>
    {products.map(product => (
      <Container key={product.id}>
        <Typography>{product.id}</Typography>
        <Typography>{product.descripcion}</Typography>
        <Typography>{product.nombre}</Typography>
        <Typography>{product.precio}</Typography>
      </Container>
    ))}
  </Container>
  )
}
