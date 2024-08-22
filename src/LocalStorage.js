export const getAddedProducts = () => {
  return JSON.parse(localStorage.getItem('cart')) || [];
};

export const setCartLS = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('cartTimestamp', Date.now());
};

export const clearCartAfterTimeout = (setCart) => {
  const cartTimestamp = localStorage.getItem('cartTimestamp');
  const oneDayInMs = 24 * 60 * 60 * 1000;

  if (cartTimestamp && Date.now() - cartTimestamp >= oneDayInMs) {
    localStorage.removeItem('cart');
    localStorage.removeItem('cartTimestamp');
    setCart([]);
  }
};
