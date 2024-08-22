import { useContext } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';
import { Box, Typography, Container } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router';

export const OrderHistory = () => {
  const navigate = useNavigate();
  const { user } = useContext(FirebaseContext);

  return (
    <>
      <Typography
        variant="h5"
        style={{ color: '#e3e5f3', margin: 'auto', marginTop: '15px' }}
      >
        Historial de compras
      </Typography>
      <IoMdClose
        style={{ color: 'white', margin: '15px' }}
        onClick={() => navigate('/')}
      />
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
        {user?.orders?.map((order, index) => (
          <Box
            sx={{
              backgroundColor:'#e3e5f3',
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
            key={index}
          >
            <Typography variant='h6' sx={{ color: 'black' }}>Precio total de la compra: ${order.total}</Typography>
            {order?.cart?.map((cart, index) => (
              <Box key={index} sx={{display:'flex', flexDirection:'column', gap:'6px', alignItems:'center'}}>
                <Typography variant='h5' sx={{ color: 'black', textDecoration:'underline' }}>{cart.name}</Typography>
                <Typography sx={{ color: 'black' }}>
                  Descripción: {cart.description}
                </Typography>
                <Typography sx={{ color: 'black' }}>Cantidad: {cart.quantity}</Typography>
                <Typography sx={{ color: 'black' }}>Precio por unidad: ${cart.price}</Typography>
                <img
                  style={{ width: '300px', borderRadius:'16px' }}
                  src={cart.image}
                  alt={cart.name}
                />
                <Typography sx={{ color: 'black' }}>{order.fecha}</Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Container>
    </>
  );
};
