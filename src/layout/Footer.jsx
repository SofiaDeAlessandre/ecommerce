import AppBar from '@mui/material/AppBar';
import { Typography, Container, Box } from '@mui/material';
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import './Footer.css'

export const Footer = () => {
  return (
    <AppBar className='footer' position="static" sx={{ width: "100%", padding:"10px 0px", textAlign:"center", color: '#f8bbd0', boxShadow:'rgb(141 141 141 / 76%) 0px 4px 15px',backdropFilter: 'blur(2px)',
      backgroundColor: 'transparent',}}>
    <Typography variant="subtitle1" color="#f8a6ea" component="div">
      COPYRIGHT SOFIA DE ALESSANDRE
      </Typography>
      <Container sx={{display:'flex', gap:'1em', justifyContent:'center'}}>
        <a href="https://github.com/SofiaDeAlessandre">
          <FaGithub style={{color:'#f8a6ea'}}/>
        </a>
        <a href="https://www.linkedin.com/in/sof%C3%ADa-de-alessandre/">
        <FaLinkedin style={{color:'#f8a6ea'}}/>
        </a>
        </Container>
    
    </AppBar>
    
  )
}

