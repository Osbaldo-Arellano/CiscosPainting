// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, useMediaQuery, useTheme, Box } from '@mui/material';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import MobileHome from './components/HomeMobile'
import { useState } from 'react';
import Footer from './components/Footer';

export default function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Router sx={{ bgColor:'#111'}}>
      {/* Pass drawer state as props */}
      {isMobile ? (
        <MobileNavbar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      ) : (
        <Navbar />
      )}

      <Box>
          <Routes>
            {isMobile ? (
            <Route path="/" element={<MobileHome />} />
      ) : (
            <Route path="/" element={<Home />} />
      )}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
      </Box>
      <Footer></Footer>

    </Router>
  );
}         
