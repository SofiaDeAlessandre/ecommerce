import React from 'react';
import { Box, Typography } from '@mui/material';
export const NotFound = () => {
  return (
    <Box
      sx={{
        background: 'transparent',
        padding: '10px',
        borderRadius: '10px',
        position: 'relative',
        width: { sx: 0, sm: '100%' },
        maxWidth: 800,
        margin: 'auto',
        textAlign: 'center',
        borderColor: 'white',
        transition: 'transform 0.3s ease',
        boxShadow: '#6f7295 0px 2px 7px 6px',
        overflow: 'hidden',
      }}
    >
      <Typography variant="h5" style={{ color: '#e3e5f3' }}>
        {' '}
        No se ha encontrado la página solicitada
      </Typography>
    </Box>
  );
};
