import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { styled, alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiCartDownload } from 'react-icons/bi';
import { IoIosSearch } from 'react-icons/io';
import { useState, useContext } from 'react';
import { Cart } from './Cart';
import { FirebaseContext } from '../context/FirebaseContext';
import { BsBox2 } from 'react-icons/bs';
import { IoPlanet, IoRocketSharp } from 'react-icons/io5';
import { CartContext } from '../context/CartContext';
import { FaUser } from 'react-icons/fa';
//import { InfinitySlide } from './infinitySlide/InfinitySlide';
import { useNavigate } from 'react-router';
import './NavBar.css'; 
import { TbLogout } from 'react-icons/tb';
import { getAuth, signOut } from "firebase/auth";
import { useMediaQuery, useTheme } from '@mui/material';


const pages = ['Inicio','Productos'];
const settings = ['Iniciar sesión', 'Historial de compra', 'Cerrar sesión'];

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { user } = useContext(FirebaseContext);
  const { quantity } = useContext(CartContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();


  const handleMenuItemClick = (page) => {
    switch (page) {
      case 'Iniciar sesión':
        navigate('/Login');
        break;
      case 'Historial de compra':
        navigate('/OrderHistory');
        break;
      case 'Logout':
        handleSignOut()
        console.log('Logging out...');
        break;
      default:
        navigate('/'); // Navegar a la página principal por defecto
    }
    handleCloseUserMenu(); // Cierra el menú después de la selección
  };

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
      });
  };


  return (
    <AppBar
      className="appBar"
      position="static"
      style={{
        color: '#f8bbd0',
        boxShadow: '#ae39b1 0px 4px 15px',
        backdropFilter: 'blur(2px)',
        backgroundColor: 'transparent',
        padding:'10px'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         <Box sx={{display:'flex', gap:'5em'}}>
          <IoRocketSharp
        style={{
          color: '#76ffff', 
          fontSize: '30px',
          animation: 'move 5s infinite',
        }}
      />
          <Typography
            variant="h6"
            sx={{
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color: '#ae39b1',
            }}
          >
            TIENDA ONLINE
          </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<GiHamburgerMenu
							style={{ fontSize: "25px" }}
							onClick={handleOpenNavMenu}
						/>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={() =>
                  navigate(page === 'Inicio' ? '/' : `/${page}`)
                }>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
          <Typography
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#ae39b1',
              textDecoration: 'none',
              overflow: 'visible',
            fontSize: {xs:'20px', md:'50px'}
            }}
          >
            TIENDA ONLINE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() =>
                  navigate(page === 'Inicio' ? '/' : `/${page}`)
                }
                sx={{ my: 2, color: '#ae39b1', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex' }}>
              <BiCartDownload
                style={{ fontSize: '30px', color: '#ae39b1' }}
                onClick={toggleDrawer('right', true)}
              />
              <span style={{ color: 'white' }}>
                {quantity > 0 ? quantity : ''}
              </span>
            </Box>
            <Cart state={state} toggleDrawer={toggleDrawer} />
           <Tooltip title="Open settings">

{user ? (
									<Button onClick={handleOpenUserMenu} sx={{ p: 0 }}>
										<FaUser style={{ fontSize: "23px", color: "#ae39b1" }} />
										<Typography variant="p" sx={{ color: "white" }}>
											{user.username}
										</Typography>
									</Button>
								) : (
									<Button onClick={() => navigate("/Login")}>
										<FaUser style={{ fontSize: "23px", color: "#ae39b1" }} />
										<Typography sx={{ color: "white" }}>
											Iniciar Sesión
										</Typography>
									</Button>
								)}



            </Tooltip> 
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleMenuItemClick(setting)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Tooltip title="Cerrar Sesión">
							<Box>
								<Button onClick={handleSignOut} sx={{ p: 0 }}>
									<TbLogout style={{ fontSize: "27px", color: "#ae39b1" }} />
								</Button>
							</Box>
						</Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
