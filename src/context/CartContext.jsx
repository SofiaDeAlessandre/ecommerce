import { createContext, useState, useEffect } from 'react';
import { getAddedProducts } from '../LocalStorage';
import { collection, onSnapshot, doc, getDoc, updateDoc  } from 'firebase/firestore';
import { db } from '../../firebase';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getAddedProducts('cart') || []);
  const [quantity, SetQuantity] = useState(1)
  const [subtotal, setSubtotal] = useState(0);
  //const [notificationCart, setNotificationCart] = useState(0)
  
  console.log(cart)






  useEffect(() => {
    const initialSubtotal = cart.reduce((acc, product) => {
      return acc + (product.quantity > 0 ? product.price * product.quantity : 0);
    }, 0);
    setSubtotal(initialSubtotal);
    console.log(initialSubtotal)
  }, [cart]);

  useEffect(() => {
    const initialNotifications = cart.reduce((acc, product) => {
      return acc + (product.quantity > 0 ? product.quantity : 0);
    }, 0);
    console.log(quantity)
    SetQuantity(initialNotifications);
  }, [cart]);

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

  

  const handleRemoveQuantity = (productToRemove) => {
    const newCart = cart.map((cartProduct) => {
      if (cartProduct.id === productToRemove) {
        const cartRemove = (cartProduct.quantity || 0) - 1;
        //subtotalProduct(cartProduct.price, cartRemove);
        return {
          ...cartProduct,
          quantity: cartRemove > 0 ? cartRemove : 1,
          //price: cartRemove > 0 ? cartProduct.price : 0
        };
      }
      return cartProduct;
    });
  
    setCart(newCart);
    console.log(newCart, quantity);
  };
  
  const subtotalProduct = (product) => {
    return product.price * product.quantity;
  };
  
  // const total = () => {
  //   return cart.reduce((total, product) => total + subtotalProduct(product), 0);
  // };

  const handleDeleteAll = () => {
setCart([])
  };

  return (
    <CartContext.Provider value={{ handleAdd, handleDelete, cart, handleAddQuantity, quantity, subtotalProduct, handleRemoveQuantity, setSubtotal, subtotal, setCart, handleDeleteAll}}>
      {children}
    </CartContext.Provider>
  );
};
