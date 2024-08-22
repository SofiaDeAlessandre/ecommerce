import { createContext, useEffect, useState } from 'react';
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router';

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [modal, setModal] = useState(0);
  const [fromLoginPage, setFromLoginPage] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

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

  useEffect(() => {
    const isAuth = () => {
      onAuthStateChanged(auth, async (user) => {
        try {
          if (user) {
            const uid = user.uid;
            const userDocRef = doc(db, 'users', uid);
            onSnapshot(userDocRef, (doc) => {
              const userInfo = doc.data();
              setUser({ ...user, ...userInfo });
            });
          } else {
            setUser(null);
          }
        } catch (error) {
          setUser(null);
        }
      });
    };
    isAuth();
  }, []);

  const finalizePurchase = async (cart, subtotal) => {
    if (user && user.uid) {
      try {
        const userDocRef = doc(db, 'users', user.uid);
        await updateDoc(userDocRef, {
          orders: arrayUnion({
            cart: [...cart],
            fecha: new Date().toLocaleDateString(),
            total: subtotal,
          }),
        });
      } catch (error) {
        console.error('Error al finalizar la compra:', error);
      }
    } else {
      console.error('Usuario no autenticado.');
    }
  };

  const handleFromLoginPages = (page, boolean) => {
    navigate(page);
    setFromLoginPage(boolean);
  };

  return (
    <FirebaseContext.Provider
      value={{
        products,
        setProducts,
        user,
        setUser,
        finalizePurchase,
        modal,
        setModal,
        fromLoginPage,
        handleFromLoginPages,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
