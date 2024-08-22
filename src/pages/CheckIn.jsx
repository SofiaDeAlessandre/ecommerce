import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { FirebaseContext } from '../context/FirebaseContext';
import { useEffect } from 'react';

export const CheckIn = () => {
  const { cart, subtotalProduct, subtotal, setCart, handleDeleteAll } = useContext(CartContext);
  const { finalizePurchase, setModal } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handlefinalizePurchase = () => {
		finalizePurchase(cart, subtotal);
		setModal(1);
		navigate("/Modal");
    localStorage.setItem('modal', 1);
		handleDeleteAll();
	};

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  }, [cart, navigate]);


  return (
    <Box sx={{backgroundColor:"white", width:"auto", padding:"10px", borderRadius:"10px",
      position: 'relative',
      borderRadius: '18px',
      width: '350px',
      margin: 'auto',
      textAlign: 'center',
      backgroundColor: 'white',
      borderColor:'white',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.04)',
        cursor:'pointer'
      },
      boxShadow: '#ae39b1 0px 2px 7px 6px',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '-30px',
        right: '-30px',
        bottom: '-30px',
        left: '-30px,',
        borderRadius: '30px',
        border: '30px solid #f7f3f30d',
        webkitFilter: 'blur(8px)',
        filter: 'blur(2px)',
        zIndex: '1'}}}>
      <Button onClick={() => navigate('/')}>Regresar</Button>
      <Typography variant='h5'>Mis compras</Typography>
      {cart.map((product) => (
        <Box
          key={product.id}
          sx={{
            padding: 2,
            borderBottom: '1px solid #ddd',
            textAlign: 'center',
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
          <Typography  variant="body2">Subtotal:${subtotalProduct(product)}</Typography>
        </Box>
      ))}
      <Typography>Total: $ {subtotal} </Typography>
      <Button onClick={handlefinalizePurchase}>Finalizar compra</Button>
    </Box>
  );
};
