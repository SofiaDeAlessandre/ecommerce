import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router';
import { FirebaseContext } from '../context/FirebaseContext';
import { useEffect } from 'react';

export const CheckIn = () => {
  const { cart, subtotalProduct, subtotal, handleDeleteAll } =
    useContext(CartContext);
  const { finalizePurchase, setModal } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handlefinalizePurchase = () => {
    finalizePurchase(cart, subtotal);
    setModal(1);
    navigate('/Modal');
    localStorage.setItem('modal', 1);
    handleDeleteAll();
  };

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  }, [cart, navigate]);

  return (
    <>
    <Button onClick={() => navigate('/')} sx={{marginTop:'15px'}}>Regresar</Button>
    <Typography variant="h5" sx={{color:'white', textAlign:'center'}}>Mis compras</Typography>
    <Container
      sx={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '30px',
          marginBlock: '20px,',
          gap: '3em',
          justifyContent: 'center',
      }}
    >
      {cart?.map((product) => (
        <Box
          key={product.id}
          sx={{
            backgroundColor: 'white',
              padding: '10px',
              borderRadius: '10px',
              position: 'relative',
              borderRadius: '18px',
              width: '350px',
              margin: 'auto',
              textAlign: 'center',
              borderColor: 'white',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.04)',
                cursor: 'pointer',
              },
              boxShadow: '#6f7295 0px 2px 7px 6px',
              overflow: 'hidden',
              }}
        >
          <Typography> Cantidad: {product.quantity}</Typography>
          <Typography variant="h6">{product.name}</Typography>
          <img
            src={product.image}
            alt={product.name}
            style={{ borderRadius: '100px', width: '100px' }}
          />
          <Typography>Precio: ${product.price}</Typography>
          <Typography variant="body2">
            Subtotal:${subtotalProduct(product)}
          </Typography>
        </Box>
      ))}
      </Container>
      <Typography sx={{color:'white', textAlign:'center'}}>Total: $ {subtotal} </Typography>
      <Button onClick={handlefinalizePurchase} sx={{display:'flex', margin:'auto'}}>Finalizar compra</Button>
    </>
  );
};
