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
    .email('Ingresa un email válido')
    .required('Ingresa un email válido'),
  password: yup
    .string()
    .min(8, 'La contraseña debe tener un mínimo de 8 caracteres')
    .required('Ingrese una contraseña válida'),
});

export const Login = () => {
  const { setUser, user, fromLoginPage, handleFromLoginPages } =
    useContext(FirebaseContext);
  const navigate = useNavigate();
  const auth = getAuth();
  const [typePassword, setTypePassword] = useState('password');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cart } = useContext(CartContext);

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
        setUser({
          id: loggedInUser.uid,
          email: loggedInUser.email,
        });

        if (
          (fromLoginPage && cart.length === 0) ||
          (!fromLoginPage && cart.length === 0)
        ) {
          navigate('/');
        } else if (fromLoginPage && cart.length !== 0) {
          navigate('/Productos');
        } else if (!fromLoginPage && cart.length !== 0) {
          navigate('/CheckIn');
        }
      } catch (error) {
        console.error('Error during login:', error.code, error.message);
      }
    },
  });
  const handleEmailChange = (event) => {
    setUser(null);
    formik.handleChange(event);
  };

  return (
    <Container
      as="form"
      sx={{
        backgroundColor: '#e3e5f3',
        background: 'transparent',
        boxShadow: '#ae39b1 0px 4px 15px',
        borderRadius: '30px',
        webkitFilter: 'blur(10px)',
        width: { xs: '70%', lg: '40%' },
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
      }}
      onSubmit={formik.handleSubmit}
    >
      <IoMdClose
        onClick={() => handleFromLoginPages('/', false)}
        style={{ color: '#6f7295' }}
      />
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
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#6f7295',
            },
            '&:hover fieldset': {
              borderColor: '#6f7295',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6f7295',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#6f7295',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#6f7295',
          },
          '& .MuiInputBase-input': {
            color: '#e3e5f3',
          },
        }}
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
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#6f7295',
            },
            '&:hover fieldset': {
              borderColor: '#6f7295',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6f7295',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#6f7295',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#6f7295',
          },
          '& .MuiInputBase-input': {
            color: '#e3e5f3',
          },
        }}
      />

      <Button
        color="primary"
        fullWidth
        type="submit"
        sx={{
          background: 'transparent',
          width: '30%',
          margin: 'auto',
          color: '#6f7295',
          '&:hover': {
            color: '#a9079f',
          },
        }}
      >
        Iniciar sesión
      </Button>
      <Typography style={{ color: '#e3e5f3' }}>
        Si no tienes cuenta,
        <Button
          onClick={() => navigate('/Register')}
          sx={{
            color: '#6f7295',
            '&:hover': {
              color: '#a9079f',
            },
          }}
        >
          REGISTRATE
        </Button>
      </Typography>
      <Typography style={{ color: '#e3e5f3' }}>
        Bienvenido {user?.username}
      </Typography>
    </Container>
  );
};
