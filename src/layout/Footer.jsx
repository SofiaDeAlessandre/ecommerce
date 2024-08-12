import AppBar from '@mui/material/AppBar';
import { Typography, Container, Box } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export const Footer = () => {
  return (
    // <AppBar
    //   className="footer"
   
    <Container
			as="footer"
			position="static"
			sx={{
				backgroundColor: 'transparent',
				minWidth: "100%",
				textAlign: "center",
            position:"static",
      
        width: '100%',
        padding: '10px 0px',
        textAlign: 'center',
        color: '#f8bbd0',
        boxShadow: '#ae39b1 0px 4px 15px',
        backdropFilter: 'blur(2px)',
        backgroundColor: 'transparent',

      }}
   
		
		>
      <Typography variant="subtitle1" color="#ae39b1" component="div">
        COPYRIGHT SOFIA DE ALESSANDRE
      </Typography>
      <Container sx={{ display: 'flex', gap: '1em', justifyContent: 'center' }}>
        <a href="https://github.com/SofiaDeAlessandre">
          <FaGithub style={{ color: '#ae39b1' }} />
        </a>
        <a href="https://www.linkedin.com/in/sof%C3%ADa-de-alessandre/">
          <FaLinkedin style={{ color: '#ae39b1' }} />
        </a>
      </Container>
{/* //</AppBar> */}
    </Container>
  );
};
