import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Quantity } from './Quantity';
import { IoClose } from 'react-icons/io5';
import { FirebaseContext } from '../context/FirebaseContext';
import img from '../assets-img/pexels-alexandrep-junior-7736101.jpg'


export const Cart = ({ state, toggleDrawer }) => {
  const navigate = useNavigate();
  const { cart, handleDeleteAll, handleDelete, subtotalProduct, subtotal } =
    useContext(CartContext);
  const { user } = useContext(FirebaseContext);
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        height: '100%',
        overflowY: 'scroll',
        backgroundColor: '#e3e5f3',
        }}
      role="presentation"
      onClick={(event) => event.stopPropagation()}
      onKeyDown={(event) => event.stopPropagation()}
    >
      <Button onClick={toggleDrawer(anchor, false)}>
        <IoClose style={{color:'#6f7295'}}/>
      </Button>
      <Button onClick={handleDeleteAll} sx={{ color: '#6f7295', '&:hover': {
                    color: '#a9079f',
                  } }}>
        Vaciar carrito
      </Button>
      {cart.length === 0 ? (
        <Typography style={{ color: '#6f7295', marginTop:'15px', textAlign:'center' }}>
          No hay productos en el carrito
        </Typography>
      ) : (
        cart?.map((product) => (
          <Box
            key={product.id}
            sx={{
              padding: 2,
              border: '10px solid transparent',
              textAlign: 'center',
              borderImage: `url(${img}) 30 stretch`,
              margin:'2px'
            }}
          >
            <Button
              onClick={() => handleDelete(product)}
              sx={{ color: '#6f7295', '&:hover': {
                    color: '#a9079f',
                  } }}
            >
              Quitar del carrito
            </Button>
            <Typography variant="h6">{product.name}</Typography>
            <img
              src={product.image}
              alt={product.name}
              style={{ borderRadius: '100px', width: '100px' }}
            />
            <Typography variant="body2">Precio: ${product.price}</Typography>
            <Quantity key={product.id} product={product} />
            <Typography>Subtotal:${subtotalProduct(product)}</Typography>
          </Box>
        ))
      )}
    </Box>
  );

  return (
    <Box>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            {cart.length > 0 && (
              <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', gap:'1em', backgroundColor: '#e3e5f3', margin:'4px'}}>
                <Typography sx={{textAlign:'center'}}>Subtotal: $ {subtotal} </Typography>
                <Button
                  onClick={
                    user ? () => navigate('/CheckIn') : () => navigate('/Login')
                  }
                  sx={{ backgroundColor:'#6f7295', color:'#e3e5f3',margin:'auto','&:hover': {
                    color: '#a9079f'}}}
                >
                  Comprar
                </Button>
              </Box>
            )}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
};
