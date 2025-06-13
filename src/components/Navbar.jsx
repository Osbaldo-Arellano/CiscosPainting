import { AppBar, Toolbar, Typography, Button, Box, Link, Menu, MenuItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const greySemiTransparent = 'rgba(255, 255, 255, 0.92)';
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: theme => theme.zIndex.appBar + 1,
        backgroundColor: 'white',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        fontFamily: '"Inter", sans-serif',
        color: greySemiTransparent,
      }}
    >
      {/* Top red bar */}
      <Box
        sx={{
          backgroundColor: '#b71c1c',
          color: greySemiTransparent,
          px: { xs: 2, md: 9 },
          py: 0.8,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.9rem',
          fontFamily: '"Inter", sans-serif',
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 500, color: greySemiTransparent }}>
          To inquire please fill out a{' '}
          <Link
            href="/quote"
            underline="hover"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              '&:hover': { color: '#ffcdd2' },
            }}
          >
            FREE quote request HERE
          </Link>
        </Typography>

        <Link
          href="tel:5032367003"
          underline="hover"
          sx={{
            color: 'white',
            fontWeight: 600,
            fontSize: '1rem',
            transition: 'color 0.3s ease',
            '&:hover': { color: '#ffcdd2' },
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            fontFamily: '"Inter", sans-serif',
          }}
        >
          📞 (503) 236-7003
        </Link>
      </Box>

      {/* Main navbar */}
      <AppBar
        position="static"
        elevation={4}
        sx={{
          backgroundColor: 'rgb(34, 33, 33, .9)',
          color: greySemiTransparent,
          px: { xs: 2, md: 9 },
          py: 2,
          fontFamily: '"Inter", sans-serif',
        }}
      >
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo overlapping the navbar */}
          <Box sx={{ position: 'absolute', top: scrolled ? 3 : -10 }}>
            <img
              src={scrolled ? "images/small-logo.png" : "images/logo.png"}
              alt="Logo"
              style={{
                height: scrolled ? 60 : 200,
                objectFit: 'contain',
                transition: 'all .5s ease',
              }}
            />
          </Box>

          {/* Nav Links */}
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 1, md: 2.5 },
              alignItems: 'center',
              flexGrow: 1,
              justifyContent: 'center',
              fontFamily: '"Inter", sans-serif',
            }}
          >
            <Button
              component={RouterLink}
              to="/"
              sx={navLinkStyles(greySemiTransparent)}
            >
              Home
            </Button>

            {/* Services Dropdown */}
            <Box
              onMouseEnter={handleMenuOpen}
              onMouseLeave={handleMenuClose}
            >
              <Button
                onClick={handleMenuOpen}
                endIcon={
                  <KeyboardArrowDownIcon
                    sx={{
                      transition: 'transform 0.3s ease',
                      transform: anchorEl ? 'rotate(180deg)' : 'rotate(0deg)',
                      color: greySemiTransparent,
                    }}
                  />
                }
                sx={navLinkStyles(greySemiTransparent)}
              >
                Services
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                fontFamily='"Inter", sans-serif'
                sx={{
                    '& .MuiPaper-root': {
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    },
                }}
              >
                <MenuItem component={RouterLink} to="/services/interior" onClick={handleMenuClose} sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        px: 3,
                        py: 1,
                        ml: { xs: 0, md: -2 },
                        fontWeight: 'bold',
                        fontFamily: '"Inter", sans-serif',
                        textTransform: 'none',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                        '&:hover': {
                            backgroundColor: 'rgba(163, 24, 24, 0.8)',
                            boxShadow: '0 6px 12px rgba(163, 24, 24, 0.5)',
                        },
                        }}>
                  Interior Painting
                </MenuItem>
                <MenuItem fontFamily='"Inter", sans-serif' component={RouterLink} to="/services/exterior" onClick={handleMenuClose} sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        px: 3,
                        py: 1,
                        ml: { xs: 0, md: -2 },
                        fontWeight: 'bold',
                        fontFamily: '"Inter", sans-serif',
                        textTransform: 'none',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                        '&:hover': {
                            backgroundColor: 'rgba(163, 24, 24, 0.8)',
                            boxShadow: '0 6px 12px rgba(163, 24, 24, 0.5)',
                        },
                        }}>
                    Exterior Painting
                </MenuItem>
                <MenuItem fontFamily='"Inter", sans-serif' component={RouterLink} to="/services/commercial" onClick={handleMenuClose}
                sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        px: 3,
                        py: 1,
                        ml: { xs: 0, md: -2 },
                        fontWeight: 'bold',
                        fontFamily: '"Inter", sans-serif',
                        textTransform: 'none',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                        '&:hover': {
                            backgroundColor: 'rgba(163, 24, 24, 0.8)',
                            boxShadow: '0 6px 12px rgba(163, 24, 24, 0.5)',
                        },
                        }}>
                  Commercial
                </MenuItem>
              </Menu>
            </Box>

            <Button
              component={RouterLink}
              to="/projects"
              sx={navLinkStyles(greySemiTransparent)}
            >
              Gallery
            </Button>
            <Button
              component={RouterLink}
              to="/about"
              sx={navLinkStyles(greySemiTransparent)}
            >
              About
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              sx={navLinkStyles(greySemiTransparent)}
            >
              Contact
            </Button>
          </Box>

          {/* Estimate Button */}
          <Button
            variant="contained"
            component={RouterLink}
            to="/estimate"
            sx={{
              backgroundColor: 'rgba(0,0,0,0.4)',
              color: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '999px',
              px: 3,
              py: 1,
              ml: { xs: 0, md: 2 },
              fontWeight: 'bold',
              fontFamily: '"Inter", sans-serif',
              textTransform: 'none',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              '&:hover': {
                backgroundColor: 'rgba(163, 24, 24, 0.8)',
                boxShadow: '0 6px 12px rgba(163, 24, 24, 0.5)',
              },
            }}
          >
            Get Estimate
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const navLinkStyles = (color) => ({
  color,
  fontWeight: 10,
  fontFamily: '"Inter", sans-serif',
  textTransform: 'none',
  fontSize: '1.2rem',
  px: 1,
  py: 0.5,
  borderRadius: '8px',
  transition: 'all 0.2s ease',
  '&:hover': {
    color: 'rgba(183, 28, 28, 0.8)',
    backgroundColor: 'rgba(255, 250, 250, 0.05)',
  },
});
