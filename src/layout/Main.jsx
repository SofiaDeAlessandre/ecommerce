import { CardsContainer } from '../components/CardsContainer';
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { NotFound } from '../pages/404';
import { CardDetail } from '../pages/CardDetail';
import { CheckIn } from '../pages/CheckIn';
import { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';
import { OrderHistory } from '../pages/OrderHistory';
import { Home } from '../pages/Home';
import { Modal } from '../pages/Modal';

export const Main = () => {
  const { user } = useContext(FirebaseContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Productos" element={<CardsContainer />} />
      <Route path="Login" element={<Login />} />
      <Route path="Register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
      <Route path="detail/:id" element={<CardDetail />} />
      <Route path="CheckIn" element={user && <CheckIn />} />
      <Route path="OrderHistory" element={<OrderHistory />} />
      <Route path="Modal" element={<Modal />} />
    </Routes>
  );
};
