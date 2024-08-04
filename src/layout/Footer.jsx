import AppBar from '@mui/material/AppBar';
import { Typography, Container, Box } from '@mui/material';
import { FaGithub, FaLinkedin  } from "react-icons/fa";


export const Footer = () => {
  return (
    <Box position="static" sx={{ width: "100%", padding:"10px 0px", textAlign:"center"}}>
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
    
    </Box>
    
  )
}

