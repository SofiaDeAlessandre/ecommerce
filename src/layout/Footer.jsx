import { Typography, Container, Box } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import img1 from '../assets-img/visa.svg';
 import img2 from '../assets-img/mastercard.svg';
 import img3 from '../assets-img/naranja.svg';

export const Footer = () => {
  return (
    <Container
      as="footer"
      position="static"
      sx={{
        background: 'transparent',
        minWidth: '100%',
        textAlign: 'center',
        position: 'static',
display:'flex',
flexDirection:'column',
gap:'2px',
        width: '100%',
        padding: '10px 0px',
        textAlign: 'center',
        color: '#f8bbd0',
        boxShadow: 'rgb(190 195 253) 0px 4px 15px',
        backdropFilter: 'blur(2px)',
        backgroundColor: 'transparent',
      }}
    ><Box style={{display:'flex', justifyContent:'center', gap:'1em', alignItems:'center'}}>
      <>
      <img src={img1} alt="imágen Visa" style={{width:'30px', height:'30px'}}/>
<img src={img2} alt="imágen Mastercard" style={{width:'30px', height:'30px'}} />
<img src={img3} alt="imágen Naranja" style={{width:'30px', height:'30px'}} />
</></Box>
      <Typography variant="subtitle1" color="#6f7295" component="div">
        COPYRIGHT SOFIA DE ALESSANDRE
      </Typography>
      <Container sx={{ display: 'flex', gap: '1em', justifyContent: 'center' }}>
        <a href="https://github.com/SofiaDeAlessandre">
          <FaGithub className="iconsFooter" />
        </a>
        <a href="https://www.linkedin.com/in/sof%C3%ADa-de-alessandre/">
          <FaLinkedin className="iconsFooter" />
        </a>
      </Container>
    </Container>
  );
};
