import { CardsContainer } from "../components/CardsContainer";
import {Routes, Route, Navigate } from "react-router-dom"
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { NotFound } from "../pages/404";
import { CardDetail } from "../pages/CardDetail"; 
import { CheckIn } from "../pages/CheckIn";
import { useContext } from "react";
import { FirebaseContext } from "../context/FirebaseContext";
import { OrderHistory } from "../pages/OrderHistory";
import { Home } from "../pages/Home";
//import { useNavigate } from "react-router-dom";
//import { getAuth} from 'firebase/auth';
import { Modal } from "../pages/Modal";


export const Main = () => {
  const { user } = useContext(FirebaseContext);
  //const Navigate = useNavigate();
  // const auth = getAuth();
  // console.log(auth)
  return (
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Productos" element={<CardsContainer/>}/>
<Route path="Login" element={<Login/>}/>
<Route path="Register" element={<Register/>}/>
<Route path="*" element={<NotFound/>}/>
<Route path="detail/:id" element={<CardDetail />} />
<Route path="CheckIn" element={user ? <CheckIn /> : <Navigate to="/Login"/>} />
<Route path="OrderHistory" element={<OrderHistory/>}/>
<Route path="Modal" element={<Modal/>} /> 
</Routes>
  )
}
