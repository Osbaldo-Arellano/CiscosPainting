// components/About.jsx
import { Typography, Paper } from '@mui/material';

export default function About() {
  return (
    <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>About Us</Typography>
      <Typography>Learn more about what we do and our mission.</Typography>
    </Paper>
  );
}