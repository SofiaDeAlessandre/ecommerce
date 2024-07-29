import { createContext, useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export const FirebaseContext = createContext()

export const FirebaseProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])

    const getCollection = async () => {
        const collectionReference = collection(db, "productos");
        console.log("no-bucle");
        const results = await getDocs(collectionReference);
        const newArray = results.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(newArray);
    
    }
    useEffect(() => {
      getCollection();
      console.log("no-bucle")
    }, []);

    const getCollection1 = async () => {
        const collectionReference1 = collection(db, "usuarios");
        console.log("no-bucle");
        const results = await getDocs(collectionReference1);
        const newArrayUsers = results.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(newArrayUsers);
    
    }
    useEffect(() => {
      getCollection1();
      console.log("no-bucle")
    }, []);

    
  return (
    <FirebaseContext.Provider value={{products, setProducts, users, setUsers}}>{children}</FirebaseContext.Provider>
  )
}
