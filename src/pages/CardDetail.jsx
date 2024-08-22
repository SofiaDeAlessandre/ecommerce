import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FirebaseContext } from '../context/FirebaseContext';
import { Container, Typography, Box, Button } from '@mui/material';
import {AddButton } from '../components/AddButton'
import { useNavigate } from 'react-router-dom';
//import { makeStyles } from '@mui/styles';

//const useStyles = makeStyles((theme) => ({ fadeEffect: { transition: 'opacity 0.5s ease-in-out', '&:hover': { opacity: 0.7, }, }, }));

export const CardDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const { products } = useContext(FirebaseContext);

  const product = products.find((product) => product.id === id);

  return (
    <Container style={{backgroundColor:"white", width:"auto", padding:"10px", borderRadius:"10px",
      position: 'relative', // Asegura que el contenedor tenga posición relativa
     // border: '2px solid',
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
      boxShadow: '#6f7295 0px 2px 7px 6px',
      overflow: 'hidden'
      }}>
          <Button onClick={()=>navigate('/Productos')} sx={{color:'#059999'}}>Regresar</Button>
      {product ? (
        <Box>
          <Typography> {product.name}</Typography>
          <img src={product.image} alt={product.name} style={{width:"300px"}} />
          <Typography>{product.description}</Typography>
          <Typography>Precio: ${product.price}</Typography>
          <AddButton/>
          </Box>
      ) : (
        <Typography>Producto no encontrado</Typography>
      )}
    </Container>
  );
};