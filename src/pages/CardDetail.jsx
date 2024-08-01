import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FirebaseContext } from '../context/FirebaseContext';
import { Container, Typography, Box, Button } from '@mui/material';
import {AddButton } from '../components/AddButton'

//import { makeStyles } from '@mui/styles';

//const useStyles = makeStyles((theme) => ({ fadeEffect: { transition: 'opacity 0.5s ease-in-out', '&:hover': { opacity: 0.7, }, }, }));

export const CardDetail = () => {
  
  const { id } = useParams();
  const { products } = useContext(FirebaseContext);

  const product = products.find((product) => product.id === id);

  return (
    <Container style={{display:"flex", justifyContent:"center"}}>
      {product ? (
        <Box>
          <Typography> {product.name}</Typography>
          <img src={product.image} alt={product.name} style={{width:"300px"}} />
          <Typography>{product.description}</Typography>
          <Typography>Precio: {product.price}</Typography>
          <AddButton/>
          <Button>Comprar</Button>
          </Box>
      ) : (
        <Typography>Producto no encontrado</Typography>
      )}
    </Container>
  );
};