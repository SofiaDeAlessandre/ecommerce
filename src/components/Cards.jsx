import React from 'react';
import { useContext } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '@fontsource/roboto/400.css';
export const Cards = () => {
  const { products } = useContext(FirebaseContext);
  const { handleAdd } = useContext(CartContext);
  return (
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
      {products?.map((product) => (
       // <Box sx={{minWidth:'300px', minHeight:'300px', backgroundColor:'blueviolet'}}>
        <Box
          key={product.id}
          sx={{
            position: 'relative', // Asegura que el contenedor tenga posición relativa
           // border: '2px solid',
            borderRadius: '18px',
            width: '300px',
            textAlign: 'center',
            backgroundColor: 'white',
            borderColor:'white',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.04)',
              cursor:'pointer'
            },
            boxShadow: 'rgb(141 141 141 / 76%) 0px 2px 7px 6px',
            overflow: 'hidden', // Para asegurarse de que el pseudo-elemento no sobresalga del contenedor
            '&::before': {
              content: '""',
              position: 'absolute',
              // top: '-20px',
              // right: '-20px',
              // bottom: '-20px',
              // left: '-20px',
              // borderRadius: '25px', // Ajusta el radio del borde
              // border: '10px solid transparent',
              // filter: 'blur(20px)', // Ajusta el desenfoque
              // zIndex: -1,
              // backgroundColor: 'rgba(255, 255, 255, 0.7)',
              top: '-30px',
              right: '-30px',
              bottom: '-30px',
              left: '-30px,',
              borderRadius: '30px',
              border: '30px solid #f7f3f30d',
              webkitFilter: 'blur(8px)',
              filter: 'blur(2px)',
              zIndex: '1',




            },
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ borderRadius: '16px 16px 0 0', objectFit: 'cover' }}
          />
          {/* <Typography>{product.id}</Typography> */}
          <Typography variant="h6" style={{ font: 'bold' }}>
            {product.name}
          </Typography>
          <Typography>{product.description}</Typography>
          <Typography>${product.price}</Typography>
          <Link to={`detail/${product.id}`}>ver más</Link>
          <Button onClick={() => handleAdd(product)}>Añadir al carrito</Button>
        </Box>
        //</Box>
      ))}
    </Container>

  );
};
