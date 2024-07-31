import React from 'react'
import { useContext } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';
import { Container, Typography, Box, Button} from '@mui/material';
import { Link } from "react-router-dom";

export const Cards = () => {
    const { products } = useContext(FirebaseContext)
  return (
    <Container sx={{display:"flex", flexWrap:"wrap" , marginBlock:"20px,", gap:"3em", justifyContent:"center"}}>
    {products?.map(product => (
      <Box key={product.id} sx={{border:"2px solid", width:"300px"}}>
        <img src={product.image} alt={product.name}/>
        <Typography>{product.id}</Typography>
        <Typography>{product.description}</Typography>
        <Typography>{product.name}</Typography>
        <Typography>{product.price}</Typography>
        <Link to={`detail/${product.id}`}>ver más</Link>
					<Button>Añadir al carrito</Button>
      </Box>
    ))}
  </Container>
  )
}
