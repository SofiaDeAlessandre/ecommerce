import { CardsContainer } from "../components/CardsContainer";
import {Routes, Route } from "react-router-dom"
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { NotFound } from "../pages/404";
import { CardDetail } from "../pages/CardDetail"; 

export const Main = () => {
  return (
    <Routes>
<Route path="/" element={<CardsContainer/>}/>
<Route path="Login" element={<Login/>}/>
<Route path="Register" element={<Register/>}/>
<Route path="*" element={<NotFound/>}/>
<Route path="detail/:id" element={<CardDetail />} />
</Routes>
    
  )
}
