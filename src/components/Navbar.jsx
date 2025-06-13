import { AppBar, Toolbar, Button, Box, Link, Menu, MenuItem, Popper, Paper, Grow, ClickAwayListener, MenuList } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState, useRef, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab, Zoom } from '@mui/material';

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => setOpen((prevOpen) => !prevOpen);
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // Return focus to the button when transitioning from menu closed
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <>
      {/* Sticky Top Bar */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          backgroundColor: '#b71c1c',
          color: '#fff',
          px: { xs: 2, md: 9 },
          py: 0.8,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.9rem',
          fontFamily: '"Inter", sans-serif',
          zIndex: 1200,
        }}
      >
        <Link
          href="/quote"
          underline="hover"
          sx={{
            color: 'white',
            fontWeight: 500,
            '&:hover': { color: '#ffcdd2' },
          }}
        >
          FREE quote request HERE
        </Link>

        <Link
          href="tel:5039999060"
          underline="hover"
          sx={{
            color: 'white',
            fontWeight: 600,
            fontSize: '1rem',
            '&:hover': { color: '#ffcdd2' },
          }}
        >
          📞 (503) 999-9060
        </Link>
      </Box>

      {/* Main Navbar */}
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          top: 0,
          left: 0,
          width: '100%',
          px: { xs: 2, md: 9 },
          py: 1,
          zIndex: 1100,
        }}
      >
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 5 }}>
            <img
              src="images/logo.png"
              alt="Logo"
              style={{ height: 150 }}
            />
          </Box>

          {/* Nav Links */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 4, gap: 2 }}>
            <NavLink to="/" current={location.pathname === '/'}>Home</NavLink>

            <Box
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              sx={{ position: 'relative' }}
            >
              <Button
                ref={anchorRef}
                onClick={handleToggle}
                endIcon={<KeyboardArrowDownIcon sx={{ color: '#fff' }} />}
                sx={navLinkButtonStyle(location.pathname.startsWith('/services'))}
              >
                Services
              </Button>

              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
                sx={{ zIndex: 1200 }}
              >
                {({ TransitionProps }) => (
                  <Grow {...TransitionProps} style={{ transformOrigin: 'top left' }}>
                    <Paper
                      sx={{
                        backgroundColor: 'rgba(30,30,30,0.95)',
                        color: '#fff',
                        mt: 1,
                      }}
                    >
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="services-menu"
                          onKeyDown={handleListKeyDown}
                          sx={{ p: 0 }}
                        >
                          <MenuItem component={RouterLink} to="/services/interior" onClick={handleClose}>Interior Painting</MenuItem>
                          <MenuItem component={RouterLink} to="/services/exterior" onClick={handleClose}>Exterior Painting</MenuItem>
                          <MenuItem component={RouterLink} to="/services/commercial" onClick={handleClose}>Commercial</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Box>

            <NavLink to="/projects" current={location.pathname === '/projects'}>Gallery</NavLink>
            <NavLink to="/about" current={location.pathname === '/about'}>About</NavLink>
            <NavLink to="/contact" current={location.pathname === '/contact'}>Contact</NavLink>
          </Box>

          {/* Estimate Button */}
          <Button
            component={RouterLink}
            to="/estimate"
            variant="outlined"
            sx={{
              ml: 3,
              px: 2.5,
              py: 0.8,
              color: '#fff',
              borderColor: '#fff',
              borderRadius: '999px',
              textTransform: 'none',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderColor: '#fff',
              },
            }}
          >
            Get Estimate
          </Button>
        </Toolbar>
        <ScrollTopButton />
      </AppBar>
    </>
  );
}

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Zoom in={visible}>
      <Fab
        color="primary"
        size="small"
        onClick={handleClick}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1300,
          bgcolor: '#b71c1c',
          color: '#fff',
          '&:hover': { bgcolor: '#d32f2f' },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}

function NavLink({ to, children, current }) {
  return (
    <Button
      component={RouterLink}
      to={to}
      sx={{
        color: '#fff',
        textTransform: 'none',
        fontSize: '1.1rem',
        fontWeight: 400,
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: -4,
          width: current ? '100%' : '0%',
          height: 2,
          backgroundColor: '#b71c1c',
          transition: 'width 0.3s ease',
        },
        '&:hover::after': {
          width: '100%',
        },
      }}
    >
      {children}
    </Button>
  );
}

const navLinkButtonStyle = (isActive) => ({
  color: '#fff',
  textTransform: 'none',
  fontSize: '1.1rem',
  fontWeight: 400,
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
});
