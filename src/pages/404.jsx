import React from 'react'
import { Box, Typography } from '@mui/material'
export const NotFound = () => {
  return (
    <Box
				sx={{
					backgroundColor:"white", padding:"10px", borderRadius:"10px",
						position: 'relative',
						//borderRadius: '18px',
						width: { sx: 0, sm: "100%" },
					maxWidth: 800,
						margin: 'auto',
						textAlign: 'center',
						borderColor:'white',
						transition: 'transform 0.3s ease',
						boxShadow: '#ae39b1 0px 2px 7px 6px',
						overflow: 'hidden',
						'&::before': {
						  content: '""',
						  position: 'absolute',
						  top: '-30px',
						  right: '-30px',
						  bottom: '-30px',
						  left: '-30px',
						  borderRadius: '30px',
						  border: '30px solid #f7f3f30d',
						  webkitFilter: 'blur(8px)',
						  filter: 'blur(2px)',
						  zIndex: '1',
						}
				
				}}
			>
        <Typography variant='h5'> No se ha encontrado la página solicitada</Typography>
      </Box>
  )
}
