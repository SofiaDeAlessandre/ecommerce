import AppBar from '@mui/material/AppBar';
import { Typography, Container } from '@mui/material';
import { FaGithub, FaLinkedin  } from "react-icons/fa";

export const Footer = () => {
  return (
    <AppBar position="static" sx={{ width: "100%", textAlign:"center", marginTop:"20px" }}>
    <Typography variant="subtitle1" color="white" component="div">
      COPYRIGHT SOFIA DE ALESSANDRE
      </Typography>
      <Container>
        <a href="https://github.com/SofiaDeAlessandre">
          <FaGithub/>
        </a>
        <a href="https://www.linkedin.com/in/sof%C3%ADa-de-alessandre/">
        <FaLinkedin />
        </a>
        </Container>
    
    </AppBar>
    
  )
}

