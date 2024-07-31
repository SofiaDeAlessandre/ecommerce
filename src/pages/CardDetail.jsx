import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FirebaseContext } from '../context/FirebaseContext';

export const CardDetail = () => {
  const { id } = useParams();
  const { products } = useContext(FirebaseContext);

  const product = products.find((product) => product.id === id);

  return (
    <div>
      {product ? (
        <>
          <h2>Detalles del producto {product.username}</h2>
          <img src={product.image} alt={product.name} style={{width:"300px"}}/>
          <p>{product.description}</p>
          <p>Precio: {product.price}</p>
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};