import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';

import { FirebaseContext } from '../context/FirebaseContext';

export const Modal = () => {
  const { modal, setModal } = useContext(FirebaseContext);

  const navigate = useNavigate();
  useEffect(() => {
    const storedModal = localStorage.getItem('modal');
    if (storedModal) {
      setModal(Number(storedModal));
    }
  }, []);
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '10px',
          position: 'relative',
          width: { sx: 0, sm: '100%' },
          maxWidth: 800,
          margin: 'auto',
          textAlign: 'center',
          borderColor: 'white',
          transition: 'transform 0.3s ease',
          boxShadow: '#ae39b1 0px 2px 7px 6px',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <Button
            onClick={() => navigate('/')}
            sx={{
              color: '#51074d',
              width: 'auto',
              fontWeight: 700,
              fontFamily: 'Spectral',
              fontSize: 12,
              display: 'inline-block',
              '&:hover': {
                color: '#a9079f',
              },
            }}
          >
            {modal === 0 && 'Aceptar'}
            {modal === 1 && 'Regresar'}
          </Button>
        </Box>
        <Typography
          sx={{
            fontSize: 24,
            textAlign: 'center',
            fontWeight: 700,
            color: '#a9079f',
          }}
        >
          {modal === 0 && 'Se ha registrado correctamente'}
          {modal === 1 && '¡GRACIAS POR SU COMPRA!'}
        </Typography>
        {modal === 1 && (
          <>
            <Typography
              sx={{
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 500,
              }}
            >
              Su pedido llegará en 48hs.
            </Typography>
          </>
        )}
      </Box>
    </>
  );
};
