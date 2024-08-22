import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { styled, alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiCartDownload } from 'react-icons/bi';
import { useState, useContext } from 'react';
import { Cart } from './Cart';
import { FirebaseContext } from '../context/FirebaseContext';
import { CartContext } from '../context/CartContext';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { TbLogout } from 'react-icons/tb';
import { getAuth, signOut } from 'firebase/auth';
import { useTheme } from '@emotion/react';
const pages = ['Inicio', 'Productos'];
const settings = ['Iniciar sesión', 'Historial de compra', 'Cerrar sesión'];

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { user, handleFromLoginPages } = useContext(FirebaseContext);
  const { quantity } = useContext(CartContext);
  const theme = useTheme();
  const navigate = useNavigate();
  const handleMenuItemClick = (page) => {
    switch (page) {
      case 'Iniciar sesión':
        navigate('/Login');
        break;
      case 'Historial de compra':
        navigate('/OrderHistory');
        break;
      case 'Cerrar sesión':
        handleSignOut();
        break;
      default:
        navigate('/');
    }
    handleCloseUserMenu();
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

  const handleNavMenuItemClick = (page) => {
    navigate(page === 'Inicio' ? '/' : `/${page}`);
    handleCloseNavMenu();
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate('/');
        handleFromLoginPages('/', false);
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <AppBar
      className="appBar"
      position="static"
      style={{
        background: 'transparent',
        color: '#f8bbd0',
        boxShadow: 'rgb(190 195 253) 0px 4px 15px',
        backdropFilter: 'blur(2px)',
        backgroundColor: 'transparent',
        padding: '10px',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <GiHamburgerMenu
                style={{ fontSize: '25px', marginTop: '7px', color: '#e3e5f3', marginRight:'15px' }}
                onClick={handleOpenNavMenu}
              />
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => handleNavMenuItemClick(page)}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box style={{ display: { xs: 'none', md: 'flex' } }}></Box>

            <Typography
              variant="h6"
              sx={{
                mr: 1,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
                color: '#6f7295',
              }}
            >
              SD BOUTIQUE
            </Typography>
          </Box>
          <Typography
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#6f7295',
              textDecoration: 'none',
              overflow: 'visible',
              fontSize: { xs: '20px', md: '50px' },
            }}
          >
            SD BOUTIQUE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => navigate(page === 'Inicio' ? '/' : `/${page}`)}
                sx={{
                  my: 2,
                  color: '#e3e5f3',
                  display: 'block',
                  '&:hover': {
                    color: '#a9079f',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex' }}>
              <Tooltip
                title="El carrito se vaciará en 24 hs"
                sx={{ display: 'flex' }}
              ><Box>
                <BiCartDownload
                  className="icon"
                  onClick={toggleDrawer('right', true)}
                />
                <span style={{ color: 'white' }}>
                  {quantity > 0 ? quantity : ''}
                </span>
                </Box>
              </Tooltip>
            </Box>
            <Cart state={state} toggleDrawer={toggleDrawer} />
            <Tooltip title="Iniciar Sesión">
              <Box>
              {user ? (
                <Button onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Box
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <FaUser className="icon" style={{ marginTop: '25px'}} />
                    <Typography variant="p" sx={{ color: '#e3e5f3' }}>
                      {user.username}
                    </Typography>
                  </Box>
                </Button>
              ) : (
                <Button onClick={() => handleFromLoginPages('/Login', true)}>
                  <FaUser className="icon" style={{ fontSize: '23px' }} />
                </Button>
              )}
              </Box>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
