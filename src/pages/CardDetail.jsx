import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FirebaseContext } from '../context/FirebaseContext';
import { Container, Typography, Box, Button } from '@mui/material';
import { AddButton } from '../components/AddButton';
import { useNavigate } from 'react-router-dom';

export const CardDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { products } = useContext(FirebaseContext);

  const product = products.find((product) => product.id === id);

  return (
    <Container
      style={{
        backgroundColor: 'white',
        width: 'auto',
        padding: '10px',
        borderRadius: '10px',
        position: 'relative',
        borderRadius: '18px',
        width: '350px',
        margin: 'auto',
        textAlign: 'center',
        backgroundColor: 'white',
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
      <Button
        onClick={() => navigate('/Productos')}
        sx={{
          color: '#6f7295',
          '&:hover': {
            color: '#a9079f',
          },
        }}
      >
        Regresar
      </Button>
      {product ? (
        <Box style={{display:'flex', flexDirection:'column', gap: '6px', alignItems:'center'}}>
          <Typography variant='h6' style={{textDecoration:'underline'}}> {product.name}</Typography>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '300px', borderRadius:'18px' }}
          />
          <Typography>Descripción: {product.description}</Typography>
          <Typography>Precio: ${product.price}</Typography>
          <AddButton />
        </Box>
      ) : (
        <Typography style={{ color: 'white' }}>
          Producto no encontrado
        </Typography>
      )}
    </Container>
  );
};
