import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Quantity } from './Quantity';
import { IoClose } from "react-icons/io5";
import { FirebaseContext } from '../context/FirebaseContext';

export const Cart = ({ state, toggleDrawer }) => {
  const navigate = useNavigate();
  const { cart, handleDeleteAll, handleDelete, subtotalProduct, subtotal} = useContext(CartContext);
  const { user } = useContext(FirebaseContext);
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, height:'100%', overflowY:'scroll', backgroundColor:'#dbebeb'}}
      role="presentation"
      onClick={(event) => event.stopPropagation()} 
      onKeyDown={(event) => event.stopPropagation()}
    >
      <Button onClick={toggleDrawer(anchor, false)}><IoClose /></Button>
      <Button onClick={handleDeleteAll}>Vaciar carrito</Button>
      {cart.length === 0 ? (
        <Typography>No hay productos en el carrito</Typography>
      ) : (
        cart.map((product) => (
          <Box
            key={product.id}
            sx={{ padding: 2, borderBottom: '1px solid #ddd', textAlign:'center'}}
          >
            <Button onClick={() => handleDelete(product)}>
              Quitar del carrito
            </Button>
            <Typography variant="h6">{product.name}</Typography>
            <img src={product.image} alt={product.name} style={{borderRadius:'100px', width:'100px'}} />
            <Typography variant="body2">Precio: ${product.price}</Typography>
            <Quantity key={product.id} product={product}/>
        <Typography>Subtotal:${subtotalProduct(product)}</Typography>
          </Box>
        ))
      )}
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            {cart.length > 0 && (
              <Box>
              <Typography>Subtotal: $ {subtotal} </Typography>
              <Button onClick={user ? () => navigate("/CheckIn") : () => navigate("/Login")}>Comprar</Button>
            </Box>
            )}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
