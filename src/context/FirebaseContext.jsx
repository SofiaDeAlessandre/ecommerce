import { createContext, useContext, useEffect, useState } from 'react';
import { collection, onSnapshot, doc, getDoc, updateDoc, arrayUnion  } from 'firebase/firestore';
import { db } from '../../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Box } from '@mui/material'


export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const auth = getAuth();


// const finalizarCompra = async (cart) => {
//   try {
//     const orderReference = doc(db, "users", user.uid)
//     console.log(cart)
//      await updateDoc(orderReference, {
//       orders: arrayUnion({
//         cart: [...cart],
//         fecha: new Date(),
//         total: subtotal,
//     })})
//   } catch (err)  {
//     console.log(err)
//   }
//  }
 


  useEffect(() => {
    const getProducts = () => {
      const collectionReference = collection(db, 'products');
      onSnapshot(collectionReference, (snapshot) => {
        const productosArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productosArray);
      });
    };

    getProducts();
  }, []);

  const getUserInfo = async (uid) => {
    try {
      const docRef = doc(db, 'users', uid);
      const document = await getDoc(docRef);
      return document.data();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const isAuth = () => {
      onAuthStateChanged(auth, async (user) => {
        try {
          if (user) {
            const uid = user.uid;
            const userInfo = await getUserInfo(uid);
            setUser({ ...user, ...userInfo });
          } else {
            setUser(null);
          }
        } catch (error) {
          setUser(null);
          console.error('Error during authentication:', error);
        }
      });
    };
    isAuth();
  }, []);

  // const finalizarCompra = () =>{
  //   console.log('hola')
  //   return(
  //     <Box sx={{backgroundColor:"blue"}}>Gracias por su compra</Box>
    
  //   )
  // }

  const finalizarCompra = async (cart, subtotal) => {
    if (user && user.uid) {
      try {
        const userDocRef = doc(db, 'users', user.uid);
        await updateDoc(userDocRef, {
          orders: arrayUnion({
            cart: [...cart],
            fecha: new Date(),
            total: subtotal,
          }),
        });
        console.log('Compra finalizada y guardada en Firestore.');
      } catch (error) {
        console.error('Error al finalizar la compra:', error);
  }
    } else {
      console.error('Usuario no autenticado.');
    }
  };

  return (
    <FirebaseContext.Provider value={{ products, setProducts, user, setUser, finalizarCompra }}>
      {children}
    </FirebaseContext.Provider>
  );
};
