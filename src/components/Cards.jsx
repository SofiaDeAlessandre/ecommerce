import React from 'react';
import { useContext } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';
import { Container, Typography, Box } from '@mui/material';
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
              backgroundColor: '#e3e5f3',
              borderColor: 'white',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.04)',
                cursor: 'pointer',
              },
              boxShadow: '#6f7295 0px 2px 7px 6px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ borderRadius: '16px 16px 0 0', objectFit: 'cover' }}
            />
            <Typography variant="h6">
              {product.name}
            </Typography>
            <Typography>${product.price}</Typography>
            <Link
              to={`/detail/${product.id}`}
              style={{ textDecoration: 'none', color: '#d07224' }}
            >
              ver más
            </Link>
          </Box>
        ))
      ) : (
        <Typography variant="h6" sx={{ color: '#6f7295' }}>
          No se encontraron productos
        </Typography>
      )}
    </Container>
  );
};
