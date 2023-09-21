import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom'; // Importa Link desde React Router
import "../../index.css";
import { NavLink } from 'react-router-dom'; // Importa NavLink desde React Router

 const pages = ['Inicio', 'Proyectos', 'Servicios'  ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'white', height: '143px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to="/"> {/* Utiliza Link para la página de inicio */}
            <img src={logo} alt="Logo" style={{ width: "150px", height: '137px', marginLeft: '68px' }} />
          </NavLink>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {/* Utiliza Link para las páginas de navegación */}
                  <NavLink to={page === 'Inicio' ? '/' : `/${page.toLowerCase()}`}>
                    <Typography
                       
                        
                    textAlign="center">{page}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
                <MenuItem key="Sobre Nosotros" onClick={handleCloseNavMenu}>
                {/* Utiliza NavLink para la página "Sobre Nosotros" */}
                <NavLink to="/nosotros">
                  <Typography textAlign="center">Sobre Nosotros</Typography>
                </NavLink>
              </MenuItem>
                 
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
                <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {/* Utiliza NavLink para las páginas de navegación */}
                <NavLink to={page === 'Inicio' ? '/' : `/${page.toLowerCase()}`}   style={{ textDecoration: 'none' }}>
                  <Typography fontSize="24px" color="rgba(30, 30, 30, 1)" gutterBottom>
                    {page}
                  </Typography>
                </NavLink>
              </Button>
            ))}
              <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              {/* Utiliza NavLink para la página "Sobre Nosotros" */}
              <NavLink to="/nosotros" style={{ textDecoration: 'none' }}>
                <Typography fontSize="24px" color="rgba(30, 30, 30, 1)" gutterBottom>
                  Sobre Nosotros
                </Typography>
              </NavLink>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
         
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
               <MenuItem onClick={handleCloseNavMenu}>
                {/* Utiliza NavLink para el enlace "Sobre Nosotros" */}
                <NavLink to="/nosotros" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography textAlign="center">Sobre Nosotros</Typography>
                </NavLink>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
