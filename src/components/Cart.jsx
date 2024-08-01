import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const Cart = ({ state, toggleDrawer }) => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const { handleDelete } = useContext(CartContext);
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {cart.length === 0 ? (
        <Typography>No hay productos en el carrito</Typography>
      ) : (
        cart.map((product) => (
          <Box
            key={product.id}
            sx={{ padding: 2, borderBottom: '1px solid #ddd' }}
          >
            <Button onClick={() => handleDelete(product)}>
              Quitar del carrito
            </Button>
            <Typography variant="h6">{product.name}</Typography>
            <img src={product.image} alt={product.name} width={'200px'} />
            <Typography variant="body2">{product.description}</Typography>
            <Typography variant="body2">Precio: {product.price}</Typography>
          </Box>
        ))
      )}
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            {cart.length > 0 && (
              <Button onClick={() => navigate('Login')}>Comprar</Button>
            )}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
