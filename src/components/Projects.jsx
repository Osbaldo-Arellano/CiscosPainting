// components/Projects.jsx
import { Typography, Paper, Box } from '@mui/material';
import Slider from 'react-slick';
import ProjectSlide from './ProjectSlide';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: 'Salem, Oregon – Modern Suburban Homes',
    description: 'A 12-unit residential development featuring energy-efficient designs, open floor plans, and sustainable materials. Completed on schedule despite challenging winter conditions.',
    images: ['/images/home1.png', '/images/site1.png', '/images/worker1.png', '/images/worker1-2.png']
  },
  {
    title: 'Portland Urban Loft Renovation',
    description: 'Transformed a historic downtown warehouse into luxury loft apartments while preserving its industrial character. Features exposed brick, steel beams, and smart home integration.',
    images: ['/images/home1.png', '/images/site1.png', '/images/worker1.png', '/images/worker1-2.png']
  },
  {
    title: 'Bend, OR – Mountain View Custom Home',
    description: 'A 3,500 sq ft custom-built home with panoramic Cascade Mountain views. Designed for extreme weather resilience with high-performance insulation and solar-ready roofing.',
    images: ['/images/home1.png', '/images/site1.png', '/images/worker1.png', '/images/worker1-2.png']
  },
  {
    title: 'Eugene Community Center Expansion',
    description: 'Added a 10,000 sq ft multi-purpose hall, playground, and ADA-compliant facilities to a local community center. Completed with 30% recycled materials.',
    images: ['/images/home1.png', '/images/site1.png', '/images/worker1.png', '/images/worker1-2.png']
  },
  {
    title: 'Coastal Retreat – Cannon Beach',
    description: 'A beachfront property built to withstand Pacific storms, featuring reinforced foundations, cedar siding, and floor-to-ceiling oceanview windows.',
    images: ['/images/home1.png', '/images/site1.png', '/images/worker1.png', '/images/worker1-2.png']
  }
];

export default function Projects() {
  const projectSettings = {
    dots: true,
    infinite: true,
    speed: 1000, // Transition speed in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: false,
    autoplay: true,          // Enable auto-scrolling
    autoplaySpeed: 3000,     // Delay between slides (3 seconds)
    pauseOnHover: true,      // Pause on hover
    pauseOnFocus: true,      // Pause when focused (e.g., keyboard nav)
    cssEase: 'ease-in-out'   // Smooth transition effect
  };

  return (
    <Paper elevation={3} sx={{ p: 4, marginBottom: 4 }}>
      <Typography variant="h4" gutterBottom="true" textAlign="center">Our Projects</Typography>
      <Box sx={{ 
        mt: 4,
        height: '100%'
      }}>
        <Slider {...projectSettings}>
          {projects.map((project, index) => (
            <div key={index} style={{ height: '500px' }}> {/* Fixed height for each slide */}
              <ProjectSlide project={project} />
            </div>
          ))}
        </Slider>
      </Box>
    </Paper>
  );
}