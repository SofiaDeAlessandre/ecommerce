import React from 'react';
import { useFormik } from 'formik';
import { useContext } from 'react';
import * as yup from 'yup';
import {
  TextField,
  Button,
  Container,
  InputAdornment,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FaEyeSlash } from 'react-icons/fa6';
import { IoEyeSharp } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FirebaseContext } from '../context/FirebaseContext';
import { CartContext } from '../context/CartContext';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const Login = () => {
  const { setUser, user, fromLoginPage, handleFromLoginPage } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const auth = getAuth();
  const [typePassword, setTypePassword] = useState('password');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cart } = useContext(CartContext)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setUser(null);
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const loggedInUser = userCredential.user;
        
        console.log(isLoggedIn)
        setUser({
          id: loggedInUser.uid,
          email: loggedInUser.email,
        });
        
        console.log(user);

        if (
					(fromLoginPage && cart.length === 0) ||
					(!fromLoginPage && cart.length === 0)
				) {
					navigate("/");
					console.log("si el carrito esta vacio va a home");
				} else if (fromLoginPage && cart.length !== 0) {
					navigate("/Productos");
					console.log("se logea antes de finalizar compra");
				} else if (!fromLoginPage && cart.length !== 0) {
					navigate("/CheckIn");
					console.log("se logea cuando finaliza la compra");
				}
        
      } catch (error) {
        console.error('Error during login:', error.code, error.message);
      }
    },
  });
  const handleEmailChange = (event) => {
    // Limpiar el usuario anterior al cambiar el campo de correo electrónico
    setUser(null);
    formik.handleChange(event);
  };

  return (
    <Container as="form" sx={{backgroundColor:'rgba(206, 168, 231, 0.7)'  ,
      boxShadow: '#ae39b1 0px 4px 15px', 
        borderRadius: '30px',
        webkitFilter: 'blur(10px)',
        width:{xs: '70%', lg: '40%'}
    }}  onSubmit={formik.handleSubmit}>
      <IoMdClose onClick={() => handleFromLoginPage("/", false)} />
      <TextField
        fullWidth
        autoComplete="email"
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={handleEmailChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type={typePassword}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() =>
                  setTypePassword(
                    typePassword === 'password' ? 'text' : 'password'
                  )
                }
                edge="end"
              >
                {typePassword === 'password' ? <IoEyeSharp /> : <FaEyeSlash />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button color="primary" variant="contained" fullWidth type="submit">
        Iniciar sesión
      </Button>
      <Typography>
        Si no tienes cuenta,
        <Button onClick={() => navigate('/Register')}>REGISTRATE</Button>
      </Typography>
      <Typography>Bienvenido {user?.username}</Typography>
      <Typography>Id {user?.id}</Typography>
      <Typography>Email {user?.mail}</Typography>
      {/* //<Typography>orden{user?.orders.cart[1]}</Typography> */}
    </Container>
  );
};
