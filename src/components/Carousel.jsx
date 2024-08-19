import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';
import './Carousel.css'

import lamp1 from '../assets-img/lamp-1.webp'
import lamp2 from '../assets-img/lamp-3.webp'
import lamp3  from '../assets-img/lamp-4.jpg'

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'ease-in-out',
  };

  return (
    <Box className="carrusel-container">
      <Slider {...settings}>
        <Box className="slide-item">
          <img src={lamp1} alt="Carrito" />
          <Box
            className="slide-text"
            sx={{
              height: 300,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{
                fontSize: '1.5rem',
                fontWeight: '800',
                textAlign: 'center',
              }}
            >
              3 y 6 cuotas sin interés
              {/* <span
                style={{
                  fontWeight: 'normal',
                  fontSize: '1.2rem',
                  paddingInline: 20,
                }}
              >
                Hasta
              </span>
              -70% */}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                fontWeight: '500',
                textAlign: 'center',
              }}
            >
              Envío en 24 Horas
            </Typography>
          </Box>
        </Box>
        <Box className="slide-item">
          <img src={lamp2} alt="Card Carrito" />
          <Box
            className="slide-text"
            sx={{
              height: 300,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{
                fontSize: '1.5rem',
                fontWeight: '500',
                textAlign: 'center',
              }}
            >
              20% de descuento abonando en efectivo
            </Typography>
            <Typography
              style={{
                fontSize: '1.2rem',
                textAlign: 'center',
                fontWeight: '500',
              }}
            >
              En la segunda unidad
            </Typography>
          </Box>
        </Box>
        <Box className="slide-item">
          <img src={lamp3} alt="Carrito" />
          <Box
            className="slide-text"
            sx={{
              height: 300,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: '1.5rem',
                fontWeight: '800',
                textAlign: 'center',
              }}
            >
              ¡Ilumina tus espacios!
            </Typography>
            <Typography
              variant="body1"
              style={{
                fontSize: '1.2rem',
                textAlign: 'center',
                fontWeight: '500',
              }}
            >
              Nuestras lámparas están diseñadas para iluminar espacios con colores y calidez
            </Typography>
          </Box>
        </Box>
      </Slider>
    </Box>
  );
};
