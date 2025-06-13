import { Box, Typography, Button, Grid, Paper, Card, CardContent } from '@mui/material';
import BrushIcon from '@mui/icons-material/Brush';

export default function Home() {
  return (
    <Box sx={{ bgcolor: '#111', color: '#eee', width: '100%' }}>
      {/* Hero Image Section with Dark Overlay */}
      
      <Box
        sx={{
          position: 'relative',
          height: { xs: '85vh', md: '100vh' }, // Increased height for better overlay
          width: '100%',
          backgroundImage: 'url(images/nice-house.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1,
          }}
        />

        {/* Header Text Overlay - Centered Left */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: { xs: '5%', md: '0' },
            transform: 'translateY(-50%)',
            zIndex: 2,
            maxWidth: { xs: '90%', md: '50%' },
          }}
        >
          <Box
            sx={{
              bgcolor: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(6px)',
              borderRadius: 2,
              p: 10,
              color: '#eee',
            }}
          >
            <Typography variant="h5" sx={{ color: '#ccc' }}>
            01/ Welcome
            </Typography>
            <Typography 
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontFamily: '"Inter", sans-serif',
                lineHeight: 1.2,
                fontWeight: 700,
                mb: 2,
              }}
            >
              With 20+ Years of Experience, We Are Here To Serve You
            </Typography>
          </Box>
        </Box>

        {/* Bottom Overlay content */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 100,
            px: 9,
            color: '#fff',
            maxWidth: 400,
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              bgcolor: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(6px)',
              borderRadius: 2,
              p: 2,
              mb: 4,
              color: '#eee',
            }}
          >
            <Typography variant="body1">
              Get in touch with one of Salem's premier contractors.
            </Typography>
          </Box>

          <Button
            variant="contained"
            size="medium"
            sx={{
              backgroundColor: '#f44336',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '999px',
              px: 3,
              '&:hover': { backgroundColor: '#d32f2f' },
            }}
          >
            Get Estimate
          </Button>
        </Box>
      </Box>

      {/* About Section */}
      <Box sx={{ width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 9,
        py: { xs: 8, md: 9 },
        position: 'relative',
        flexDirection: 'column', // Stack vertically
        textAlign: 'left',
        bgcolor: '#181818',
        ml: 10,
        m: 10
}}>
        <Typography variant="h5" sx={{ color: '#ccc', alignSelf: 'flex-start'}}>
          02/ About Us
        </Typography>
        <Typography variant="h3" sx={{color: '#ccc',
                  fontSize: { xs: '5rem', md: '5rem' },
                  fontFamily: '"Inter", sans-serif',
                  lineHeight: 1.7,
                  letterSpacing: '0.3px', 
                //   textDecoration: 'underline',
                //   textUnderlineOffset: '6px', 
                //   textDecorationThickness: '2px', 
                alignSelf: 'flex-start',
        }}>
          Reviving Homes, Restoring Trust
        </Typography>
        <Grid container spacing={4} columnSpacing={{ xs: 4, md: 20 }} alignItems="flex-end">
          {/* Left Column: Image */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'left', maxWidth: 'auto' }}>
              <Box
                component="img"
                src="/images/home1.png"
                alt="Reviving Homes, Restoring Trust"
                sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
              />
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
           <Box sx={{ mb: 6, maxWidth: '500px', marginLeft: { md: 'auto' } }}>
            <Box
            sx={{
                background: `linear-gradient(
                90deg,
                #b71c1c,   /* vivid red */
                #880e4f,   /* deep magenta */
                #4a148c,   /* rich purple */
                #1a237e,   /* dark indigo */
                #0d47a1    /* deep blue */
                )`,
                px: 2,
                py: 5,
                borderRadius: '8px',
                mt: -25,
                position: 'absolute',
                width: '100%',
                boxSizing: 'border-box',
            }}
            >
            <Typography
                variant="h2"
                sx={{
                color: '#fff',
                fontSize: { xs: '3rem', md: '4.5rem' },
                fontFamily: '"Inter", sans-serif',
                lineHeight: 1.2,
                letterSpacing: '0.3px',
                textShadow: '2px 2px 6px rgba(0,0,0,0.8)',
                }}
            >
                Cisco's Painting
            </Typography>
            </Box>


            <Typography
                variant="body1"
                sx={{
                color: '#ccc',
                fontSize: { xs: '1rem', md: '1.05rem' },
                fontFamily: '"Inter", sans-serif',
                lineHeight: 1.7,
                letterSpacing: '0.3px',
                }}
            >
                Cisco's Painting is one of Salem's premier painting, siding, fencing, roofing, drywall, carpentry,
                janitorial, cabinet re-paint and finishing, and restoration finish contractors. Our skilled craftsmen
                deliver top-tier results with a focus on clean execution and quality workmanship.
            </Typography>
            </Box>

            <Button
              variant="outlined"
              sx={{
                borderColor: '#ccc',
                color: '#eee',
                px: 4,
                borderRadius: '999px',
                '&:hover': { backgroundColor: '#d32f2f', borderColor: '#aaa' },
                alignSelf: 'flex-start',
              }}
            >
              About Us
            </Button>
          </Grid>
        {/* Stats Section */}
        <Box
        sx={{
            width: '100%',
            px: { xs: 2, md: 4 },
            // bgcolor: '#181818',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            flexWrap: { xs: 'wrap', md: 'nowrap' }, // wrap on xs, nowrap on md+
        }}
        >
        {/* Stats Cards Container */}
        <Box
            sx={{
            flexGrow: 1,
            display: 'flex',
            gap: 2,
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            justifyContent: 'center',
            alignItems: 'stretch',
            mr:"10%",
            }}
        >
            {[
            ['20+ Years', 'Of Professional Experience', 'linear-gradient(90deg, #b71c1c, #880e4f)'],
            ['10+ Years', 'Serving Salem and Portland since 2013.', 'linear-gradient(90deg, #4a148c, #1a237e)'],
            ['Customer Satisfaction', 'We Strive to Please Our Customers.', 'linear-gradient(90deg, #00695c, #004d40)'],
            ['100+ Projects', 'Completed Since We Began', 'linear-gradient(90deg, #37474f, #263238)'],
            ].map(([title, text, gradient], index) => (
            <Box
                key={index}
                sx={{
                flex: '1 1 120px', // flexible basis + grow/shrink
                py: { xs: 6, md: 5 },
                px: { xs: 2, md: 5 },
                background: gradient,
                color: '#fff',
                textAlign: 'center',
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                cursor: 'default',
                '&:hover .bgShape': {
                    transform: 'scale(1.1)',
                    opacity: 0.15,
                },
                transition: 'all 0.4s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minWidth: 0, // prevent overflow on flex
                }}
            >
                {/* Decorative background element */}
                <Box
                className="bgShape"
                sx={{
                    position: 'absolute',
                    top: '-20%',
                    left: '-20%',
                    width: '150%',
                    height: '150%',
                    background: 'non-gradient(circle, rgba(255,255,255,0.2), transparent)',
                    transform: 'scale(1)',
                    opacity: 0.1,
                    transition: 'all 0.5s ease',
                    zIndex: 0,
                    borderRadius: 2,
                }}
                />
                <Typography
                variant="h2"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    fontSize: { xs: '2.8rem', md: '2rem' },
                    fontWeight: 900,
                    textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
                }}
                >
                {title}
                </Typography>
                <Typography
                variant="h5"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    mt: 2,
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    maxWidth: '280px',
                    margin: '0 auto',
                    lineHeight: 1.5,
                }}
                >
                {text}
                </Typography>
            </Box>
            ))}
        </Box>
    </Box>
    
        </Grid>
      </Box>
      {/* Services Section */}
      <Box sx={{ bgcolor: '#1a1a1a', py: { xs: 8, md: 12 }, px: 9, width: 'auto', marginRight: 10 }}>
        <Typography variant="h5" sx={{ color: '#ccc', mb: 1 }}>
          03/ Our Services
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: '900', letterSpacing: '-0.5px', mb: 4, color: '#fff' }}>
          Our Various Services Are Provided For You
        </Typography>
        <Grid container spacing={4} justifyContent="space-between">
          {[
            ['Interior Painting', 'High-quality interior finishes for your home or business.'],
            ['Carpentry Services', 'Custom carpentry for renovations, repairs, and remodels.'],
            ['Restoration Work', 'Bringing historic and damaged properties back to life.'],
          ].map(([title, text], index) => (
            <Grid item xs={12} md={3.9} key={index}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: 4,
                  bgcolor: '#222',
                  color: '#eee',
                  height: '100%',
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
                    {title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: '#bbb' }}>
                    {text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
