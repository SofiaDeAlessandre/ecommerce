import { Box, Button } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';



export const Quantity = ({product}) => {
    const { handleAddQuantity, handleRemoveQuantity } = useContext(CartContext)
  return (
    <>
    <Box sx={{display:"flex", alignItems:"center"}}>
    <Button onClick={() => handleAddQuantity(product.id)}>+</Button>
      <Box>{product.quantity}</Box>
      <Button onClick={() => handleRemoveQuantity(product.id)}>-</Button>
      </Box>
    </>
  );
};
