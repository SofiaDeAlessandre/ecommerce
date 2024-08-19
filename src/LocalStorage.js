// export const getAddedProducts = () => {
//     return JSON.parse(localStorage.getItem("cart"));
//   };
//   export const setCartLS = (cart) => {
//     localStorage.setItem("cart", cart);
//   };

export const getAddedProducts = () => {
  return JSON.parse(localStorage.getItem('cart')) || [];
};

export const setCartLS = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('cartTimestamp', Date.now()); // Guardar el timestamp cuando se guarda el carrito
};

// Función para limpiar el carrito y localStorage después de 1 minuto
export const clearCartAfterTimeout = (setCart) => {
  const cartTimestamp = localStorage.getItem('cartTimestamp');
  const oneMinuteInMs = 60 * 1000; // 1 minuto en milisegundos
// const oneDayInMs = 24 * 60 * 60 * 1000;

  if (cartTimestamp && Date.now() - cartTimestamp >= oneMinuteInMs) {
    localStorage.removeItem('cart');
    localStorage.removeItem('cartTimestamp');
    setCart([]);
    console.log('Carrito y localStorage vaciados después de 1 minuto');
  }
};