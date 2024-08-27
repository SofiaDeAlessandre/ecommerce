import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  TextField,
  Button,
  Container,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { FaEyeSlash } from 'react-icons/fa6';
import { IoEyeSharp } from 'react-icons/io5';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { IoMdClose } from 'react-icons/io';
import { FirebaseContext } from '../context/FirebaseContext';
import { useContext } from 'react';

const validationSchema = yup.object({
  email: yup
    .string('Ingresa tu email')
    .email('Ingresa un email válido')
    .required('Ingresa un email válido'),
  password: yup
    .string('Ingresa tu contraseña')
    .min(8, 'La contraseña debe tener un mínimo de 8 caracteres')
    .required('Ingresa una contraseña válida'),
});

export const Register = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [typePassword, setTypePassword] = useState('password');
  const { setModal } = useContext(FirebaseContext);

  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      password: '',
    },

    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = {
          username: values.nombre,
          mail: values.email,
          orders: [],
          cart: [],
          id: userCredential.user.uid,
        };
        await setDoc(doc(db, 'users', user.id), user);
        setModal(0);
        navigate('/Modal');
      } catch (error) {
        console.error('Error during registration: ', error.code, error.message);
      }
    },
  });

  return (
    <Container
      as="form"
      sx={{
        backgroundColor: '#e3e5f3',
        background: 'transparent',
        boxShadow: '#6f7295 0px 4px 15px',
        borderRadius: '30px',
        webkitFilter: 'blur(10px)',
        width: { xs: '70%', lg: '40%' },
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
      }}
      onSubmit={formik.handleSubmit}
    >
      <IoMdClose onClick={() => navigate('/')} style={{ color: '#6f7295' }} />
      <TextField
        fullWidth
        id="nombre"
        name="nombre"
        label="Nombre"
        value={formik.values.nombre}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.nombre && Boolean(formik.errors.nombre)}
        helperText={formik.touched.nombre && formik.errors.nombre}
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
        id="emailRegistro"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
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
        id="passwordRegistro"
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
                {typePassword === 'password' ? <IoEyeSharp style={{color:'#e3e5f3'}} /> : <FaEyeSlash style={{color:'#e3e5f3'}}/>}
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
        type="submit"
        sx={{
          background: 'transparent',
          width: '30%',
          margin: 'auto',
          color: '#6f7295',
          '&:hover': {
            color: '#d07224',
          },
        }}
      >
        Registrarse
      </Button>
      <Typography style={{ color: '#e3e5f3' }}>
        Si ya tienes cuenta,{' '}
        <Button
          onClick={() => navigate('/Login')}
          sx={{
            color: '#6f7295',
            '&:hover': {
              color: '#d07224',
            },
          }}
        >
          inicia sesión
        </Button>
      </Typography>
    </Container>
  );
};
