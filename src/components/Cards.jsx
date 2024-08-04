import React from 'react'
import { useContext } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';
import { Container, Typography, Box, Button} from '@mui/material';
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';
import '@fontsource/roboto/400.css'
export const Cards = () => {
    const { products } = useContext(FirebaseContext)
    const { handleAdd} = useContext(CartContext)
  return (
    <Container sx={{display:"flex", flexWrap:"wrap" , padding:"30px", marginBlock:"20px,", gap:"3em", justifyContent:"center"}}>
    {products?.map(product => (
      <Box key={product.id} sx={{border:"1px solid radius",borderRadius:"18px", width:"300px", textAlign:"center", backgroundColor:"white", transition: "transform 0.3s ease-in-out", 
        '&:hover': {
          transform: "scale(1.1)",
          cursor:"pointer"
        },}}>
        <img src={product.image} alt={product.name} style={{borderRadius: "16px 16px 0 0", objectFit:"cover"}} />
        {/* <Typography>{product.id}</Typography> */}
        <Typography variant ="h6"  style={{font:"bold"}}>{product.name}</Typography>
        <Typography>{product.description}</Typography>
        <Typography>{product.price}</Typography>
        <Link to={`detail/${product.id}`}>ver más</Link>
        <Button onClick={()=>handleAdd(product)}>Añadir al carrito</Button>
      </Box>
    ))}
  </Container>
  )
}
