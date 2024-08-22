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
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                bottom: '-30px',
                left: '-30px',
                borderRadius: '30px',
                border: '30px solid #f7f3f30d',
                webkitFilter: 'blur(8px)',
                filter: 'blur(2px)',
                zIndex: '1',
              },
            }}
            key={index}
          >
            <Typography sx={{ color: 'black' }}>{order.total}</Typography>
            {order?.cart?.map((cart, index) => (
              <Box key={index}>
                <Typography sx={{ color: 'black' }}>
                  {cart.description}
                </Typography>
                <Typography sx={{ color: 'black' }}>{cart.quantity}</Typography>
                <Typography sx={{ color: 'black' }}>{cart.name}</Typography>
                <Typography sx={{ color: 'black' }}>{cart.price}</Typography>
                <img
                  style={{ width: '300px' }}
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
