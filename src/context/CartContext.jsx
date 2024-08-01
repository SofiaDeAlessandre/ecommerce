import { createContext, useEffect, useState } from 'react';
import { getAddedProducts } from '../LocalStorage';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getAddedProducts('cart') || []);

  const handleAdd = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    console.log('carrito añadido', newCart);
  };
  const handleDelete = (productToDelete) => {
    const deletedProduct = cart.filter(
      (product) => product.id !== productToDelete.id
    );
    setCart(deletedProduct);
    console.log('producto eliminado', deletedProduct);
  };
  // const handleDeleteAll = (product) => {
  //   const deletedProduct = cart.filter(
  //     (product) => product.id !== product.id
  //   );
  //   setCart(deletedProduct);
  //   console.log('producto eliminado', deletedProduct);
  // };

  return (
    <CartContext.Provider value={{ handleAdd, handleDelete, cart }}>
      {children}
    </CartContext.Provider>
  );
};
