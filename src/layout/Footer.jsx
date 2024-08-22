import AppBar from '@mui/material/AppBar';
import { Typography, Container, Box } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import footerImg from '../assets-img/galaxy-img.jpg'

export const Footer = () => {
  return (
    // <AppBar
    //   className="footer"
   
    <Container
			as="footer"
			position="static"
			sx={{
       background:'transparent',
				minWidth: "100%",
				textAlign: "center",
            position:"static",
      
        width: '100%',
        padding: '10px 0px',
        textAlign: 'center',
        color: '#f8bbd0',
        boxShadow: 'rgb(190 195 253) 0px 4px 15px',
        backdropFilter: 'blur(2px)',
        backgroundColor: 'transparent',

      }}
   
		
		>
      <Typography variant="subtitle1" color="#e3e5f3" component="div">
        COPYRIGHT SOFIA DE ALESSANDRE
      </Typography>
      <Container sx={{ display: 'flex', gap: '1em', justifyContent: 'center' }}>
        <a href="https://github.com/SofiaDeAlessandre">
          <FaGithub  className='iconsFooter'  />
        </a>
        <a href="https://www.linkedin.com/in/sof%C3%ADa-de-alessandre/">
          <FaLinkedin className='iconsFooter' />
        </a>
      </Container>
{/* //</AppBar> */}
    </Container>
  );
};
