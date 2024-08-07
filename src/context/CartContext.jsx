import { createContext, useEffect, useState } from 'react';
import { getAddedProducts } from '../LocalStorage';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getAddedProducts('cart') || []);
  const [quantity, SetQuantity] = useState(1)

  // const handleAdd = (product) => {
  //   const newCart = [...cart, product];
  //   setCart(newCart);
  //   console.log('carrito añadido', newCart);
  // };
  const handleAdd = (product) => {
		const existingProduct = cart.find((item) => item.id === product.id);
		if (existingProduct) {
			const updatedCart = cart.map((item) =>
				item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
			);
			setCart(updatedCart);
		} else {
			setCart([...cart, { ...product, quantity: 1 }]);
		}
		console.log("Carrito añadido", cart);
	};

  const handleDelete = (productToDelete) => {
    const deletedProduct = cart.filter(
      (product) => product.id !== productToDelete.id
    );
    setCart(deletedProduct);
    console.log('producto eliminado', deletedProduct);
  };
  // const handleAddQuantity = () => {
  //   SetQuantity(quantity=>quantity+1)
  // }
  const handleAddQuantity = (productToAdd) => {
		const newCart = cart.map((cartProduct) =>
			cartProduct.id === productToAdd
				? { ...cartProduct, quantity: (cartProduct.quantity || 0) + 1 }
				: cartProduct
		);
		setCart(newCart);
		console.log(newCart, quantity);
	};

  const handleRemoveQuantity = () => {
    if(quantity>0){
      SetQuantity(quantity=>quantity-1)
    }
    

  }
  // const handleDeleteAll = (product) => {
  //   const deletedProduct = cart.filter(
  //     (product) => product.id !== product.id
  //   );
  //   setCart(deletedProduct);
  //   console.log('producto eliminado', deletedProduct);
  // };

  return (
    <CartContext.Provider value={{ handleAdd, handleDelete, cart, handleAddQuantity, quantity, handleRemoveQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
