import React from 'react';
import { useContext } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';
import { Container, Typography, Box} from '@mui/material';
import { Link } from 'react-router-dom';
import '@fontsource/roboto/400.css';
export const Cards = ({ filter }) => {
  const { products } = useContext(FirebaseContext);
  



  const filteredProduct = filter
  ? products.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    )
  : products;

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
      {filteredProduct.length > 0 ? (
        filteredProduct?.map((product) => (
        <Box
          key={product.id}
          sx={{
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
            boxShadow: '#ae39b1 0px 2px 7px 6px',
            overflow: 'hidden', // Para asegurarse de que el pseudo-elemento no sobresalga del contenedor
            '&::before': {
              
              
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
          <Typography>${product.price}</Typography>
          <Link to={`/detail/${product.id}`} sx={{color:'#059999'}}>ver más</Link>
        </Box>
))) : (
  <Typography variant="h6">No se encontraron productos</Typography>
)}
    </Container>

  );
};
