import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Link as MuiLink,
  Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function MobileNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      {/* Top red bar */}
      <Box
        sx={{
          backgroundColor: '#b71c1c',
          color: 'white',
          px: 2,
          py: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.9rem',
          userSelect: 'none',
        }}
      >
        <MuiLink
          href="/quote"
          underline="hover"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            transition: 'color 0.3s ease',
            '&:hover': { color: '#ffcdd2' },
          }}
        >
          FREE QUOTE <u>HERE</u>
        </MuiLink>
        <MuiLink
          href="tel:5032367003"
          underline="hover"
          sx={{
            color: 'white',
            fontWeight: 600,
            transition: 'color 0.3s ease',
            '&:hover': { color: '#ffcdd2' },
          }}
        >
          📱 (503) 999-9060
        </MuiLink>
      </Box>

      {/* Main navbar */}
      <AppBar
        position="sticky"
        elevation={4}
        sx={{
          backgroundColor: 'rgb(126, 126, 126)',
          color: 'black',
          px: 2,
        }}
      >
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <img
              src="images/logo.png"
              alt="Logo"
              style={{ height: 95, width: 150}}
            />
          </Box>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon sx={{ color: 'black' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        ModalProps={{
            BackdropProps: {
            sx: {
                backdropFilter: drawerOpen ? 'blur(8px)' : 'none',
                backgroundColor: drawerOpen ? 'rgba(0,0,0,0.2)' : 'transparent',
            },
            },
        }}
        >
        <Box
          sx={{
            width: 280,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                p: 2,
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Divider />

            <Box sx={{ px: 2, mb: 2 }}>
              <img
                src="images/logo.png"
                alt="Logo"
                style={{ height: 190, objectFit: 'contain' }}
              />
            </Box>

            <List>
              {[
                { label: 'Home', path: '/' },
                { label: 'Gallery', path: '/projects' },
                { label: 'About Us', path: '/about' },
                { label: 'Contact', path: '/contact' },
              ].map(({ label, path }) => (
                <ListItem
                  key={label}
                  button
                  component={RouterLink}
                  to={path}
                  onClick={toggleDrawer}
                  sx={{
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.04)',
                    },
                  }}
                >
                  <ListItemText primary={label} />
                </ListItem>
              ))}

              {/* Services with expand */}
              <ListItem button onClick={() => setServicesOpen(!servicesOpen)}>
                <ListItemText primary="Services" sx={{ fontWeight: 600 }} />
                {servicesOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ pl: 4 }}>
                  {['Interior', 'Exterior'].map(service => (
                    <ListItem
                      key={service}
                      button
                      sx={{
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
                      }}
                    >
                      <ListItemText primary={service} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
          </Box>

          {/* Bottom CTA Button */}
          <Box sx={{ p: 2 }}>
            <Button
              fullWidth
              variant="contained"
              component={RouterLink}
              to="/estimate"
              onClick={toggleDrawer}
              sx={{
                backgroundColor: '#b71c1c',
                color: 'white',
                borderRadius: '20px',
                fontWeight: 'bold',
                py: 1,
                boxShadow: '0 4px 8px rgba(183, 28, 28, 0.4)',
                transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  backgroundColor: '#a31818',
                  boxShadow: '0 6px 12px rgba(163, 24, 24, 0.6)',
                },
              }}
            >
              Get Estimate
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
