import { useState, useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ProjectSlide({ project }) {
  const [mainSlider, setMainSlider] = useState(null);
  const [thumbnailSlider, setThumbnailSlider] = useState(null);
  const mainRef = useRef();
  const thumbRef = useRef();

  useEffect(() => {
    setMainSlider(mainRef.current);
    setThumbnailSlider(thumbRef.current);
  }, []);

  const mainSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    touchMove: false,
    draggable: false,
    asNavFor: thumbnailSlider,
    ref: mainRef
  };

  const thumbnailSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(3, project.images.length),
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    swipe: false,
    touchMove: false,
    draggable: false,
    asNavFor: mainSlider,
    ref: thumbRef,
    centerMode: true,
    centerPadding: '0px'
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'stretch',
      minHeight: 400
    }}>
      {/* LHS: Image Carousel with Thumbnails */}
      <Box sx={{ 
        width: { xs: '100%', md: '50%' },
        minHeight: { xs: 300, md: 'auto' },
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Main Image Slider */}
        <Slider {...mainSettings} style={{ flex: 1 }}>
          {project.images.map((src, i) => (
            <Box
              key={i}
              component="img"
              src={src}
              alt={`Slide ${i}`}
              sx={{ 
                width: '100%', 
                height: { xs: 300, md: '100%' },
                objectFit: 'cover',
                display: 'block'
              }}
            />
          ))}
        </Slider>
        
        {/* Thumbnail Preview */}
        <Box sx={{ 
          mt: 2,
          px: 2,
          maxWidth: '100%',
          '.slick-slide': {
            padding: '0 5px',
            '& img': {
              border: '2px solid transparent',
              opacity: 0.6,
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            },
            '&.slick-center img': {
              borderColor: 'primary.main',
              opacity: 1
            }
          }
        }}>
          <Slider {...thumbnailSettings}>
            {project.images.map((src, i) => (
              <Box key={i}>
                <Box
                  component="img"
                  src={src}
                  alt={`Thumbnail ${i}`}
                  sx={{
                    width: '100%',
                    height: 60,
                    objectFit: 'cover',
                    borderRadius: 1
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>

      {/* RHS: Project Info */}
      <Box sx={{ 
        width: { xs: '95%', md: '60%' },
        p: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        bgcolor: 'background.paper'
      }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          {project.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {project.description}
        </Typography>
      </Box>
    </Box>
  );
}