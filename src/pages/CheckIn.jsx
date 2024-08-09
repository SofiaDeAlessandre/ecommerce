import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { FirebaseContext } from '../context/FirebaseContext';


export const CheckIn = () => {
  const { cart, subtotalProduct, subtotal } = useContext(CartContext);
  const { finalizarCompra } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handleFinalizarCompra = () => {
    finalizarCompra(cart, subtotal);
    navigate('/'); 
  };

  return (
    <Box sx={{ backgroundColor: 'white' }}>
      <Button onClick={() => navigate('/')}>Regresar</Button>
      <Typography>Mis compras</Typography>
      {cart.map((product) => (
        <Box
          key={product.id}
          sx={{
            padding: 2,
            borderBottom: '1px solid #ddd',
            textAlign: 'center',
          }}
        >
          <Typography>{product.quantity}</Typography>
          <Typography variant="h6">{product.name}</Typography>
          <img
            src={product.image}
            alt={product.name}
            style={{ borderRadius: '100px', width: '100px' }}
          />
          <Typography variant="body2">Precio: ${product.price}</Typography>
          <Typography>Subtotal:${subtotalProduct(product)}</Typography>
        </Box>
      ))}
      <Typography>Total: $ {subtotal} </Typography>
      <Button onClick={handleFinalizarCompra}>Finalizar compra</Button>
    </Box>
  );
};
