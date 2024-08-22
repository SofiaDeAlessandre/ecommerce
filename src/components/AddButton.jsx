import { Button } from '@mui/material';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FirebaseContext } from '../context/FirebaseContext';
import { CartContext } from '../context/CartContext';

export const AddButton = () => {
  const { id } = useParams();
  const { products } = useContext(FirebaseContext);
  const { handleAdd } = useContext(CartContext);

  const product = products.find((product) => product.id === id);
  return (
    <Button onClick={() => handleAdd(product)} sx={{ backgroundColor:'#6f7295', color:'#e3e5f3','&:hover': {
                  color: '#a9079f'}}}>
      Añadir al carrito
    </Button>
  );
};

export default AddButton;
