import { Box, Button } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const Quantity = ({ product }) => {
  const { handleAddQuantity, handleRemoveQuantity } = useContext(CartContext);
  return (
    <>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Button
          onClick={() => handleAddQuantity(product.id)}
          sx={{ color: '#d07224' }}
        >
          +
        </Button>
        <Box>{product.quantity}</Box>
        <Button
          onClick={() => handleRemoveQuantity(product.id)}
          sx={{ color: '#d07224' }}
        >
          -
        </Button>
      </Box>
    </>
  );
};
