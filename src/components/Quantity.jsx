import { Box, Button } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


export const Quantity = ({product}) => {
    const { handleAddQuantity, quantity, handleRemoveQuantity } = useContext(CartContext)
  return (
    <>
    <Box sx={{display:"flex", alignItems:"center"}}>
      <Button onClick={handleAddQuantity}>+</Button>
      <Box>{quantity}</Box>
      <Button onClick={handleRemoveQuantity}>-</Button>
      </Box>
    </>
  );
};
