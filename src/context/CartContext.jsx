import { createContext, useState, useEffect } from 'react';
import {
  getAddedProducts,
  setCartLS,
  clearCartAfterTimeout,
} from '../LocalStorage';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getAddedProducts('cart') || []);
  const [quantity, SetQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      clearCartAfterTimeout(setCart);
    }, 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const initialSubtotal = cart.reduce((acc, product) => {
      return (
        acc + (product.quantity > 0 ? product.price * product.quantity : 0)
      );
    }, 0);
    setSubtotal(initialSubtotal);
  }, [cart]);

  useEffect(() => {
    const initialNotifications = cart.reduce((acc, product) => {
      return acc + (product.quantity > 0 ? product.quantity : 0);
    }, 0);
    SetQuantity(initialNotifications);
  }, [cart]);

  const currentCart = (newCart) => {
    setCart(newCart);
    setCartLS(newCart);
  };

  const handleAdd = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    const newCart = existingProduct
      ? cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cart, { ...product, quantity: 1 }];

    currentCart(newCart);
  };

  const handleDelete = (productToDelete) => {
    const deletedProduct = cart.filter(
      (product) => product.id !== productToDelete.id
    );
    currentCart(deletedProduct);
  };

  const handleAddQuantity = (productToAdd) => {
    const newCart = cart.map((cartProduct) =>
      cartProduct.id === productToAdd
        ? { ...cartProduct, quantity: (cartProduct.quantity || 0) + 1 }
        : cartProduct
    );
    currentCart(newCart);
  };

  const handleRemoveQuantity = (productToRemove) => {
    const newCart = cart.map((cartProduct) => {
      if (cartProduct.id === productToRemove) {
        const cartRemove = (cartProduct.quantity || 0) - 1;
        return {
          ...cartProduct,
          quantity: cartRemove > 0 ? cartRemove : 1,
        };
      }
      return cartProduct;
    });
    currentCart(newCart);
  };

  const subtotalProduct = (product) => {
    return product.price * product.quantity;
  };

  const handleDeleteAll = () => {
    setCart([]);
    localStorage.removeItem('cart');
    localStorage.removeItem('cartTimestamp');
  };
  return (
    <CartContext.Provider
      value={{
        handleAdd,
        handleDelete,
        cart,
        handleAddQuantity,
        quantity,
        subtotalProduct,
        handleRemoveQuantity,
        setSubtotal,
        subtotal,
        setCart,
        handleDeleteAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
