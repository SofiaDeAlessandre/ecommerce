export const getAddedProducts = () => {
    return JSON.parse(localStorage.getItem("cart"));
  };
  export const setCart = (cart) => {
    localStorage.setItem("cart", cart);
  };

//   export const getAddedProducts = (key) => {
//     return JSON.parse(localStorage.getItem(key));
//   };
  
//   export const setPosts = (posts) => {
//     localStorage.setItem('cart', JSON.stringify(posts));
//   };