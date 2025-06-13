// components/Contact.jsx
import { Typography, Paper, TextField, Button, Stack } from '@mui/material';

export default function Contact() {
  return (
    <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Contact</Typography>
      <Typography>Reach out to us via email or phone.</Typography>
      <Stack spacing={2} sx={{ mt: 3, maxWidth: 400, mx: 'auto' }}>
        <TextField label="Name" fullWidth variant="outlined" />
        <TextField label="Email" fullWidth variant="outlined" />
        <TextField label="Message" fullWidth variant="outlined" multiline rows={4} />
        <Button variant="contained" color="primary">Send Message</Button>
        <TextField label="Name" fullWidth variant="outlined" />
        <TextField label="Email" fullWidth variant="outlined" />
        <TextField label="Message" fullWidth variant="outlined" multiline rows={4} />
        <Button variant="contained" color="primary">Send Message</Button>
        <TextField label="Name" fullWidth variant="outlined" />
        <TextField label="Email" fullWidth variant="outlined" />
        <TextField label="Message" fullWidth variant="outlined" multiline rows={4} />
        <Button variant="contained" color="primary">Send Message</Button>
        <TextField label="Name" fullWidth variant="outlined" />
        <TextField label="Email" fullWidth variant="outlined" />
        <TextField label="Message" fullWidth variant="outlined" multiline rows={4} />
        <Button variant="contained" color="primary">Send Message</Button>
        <TextField label="Name" fullWidth variant="outlined" />
        <TextField label="Email" fullWidth variant="outlined" />
        <TextField label="Message" fullWidth variant="outlined" multiline rows={4} />
        <Button variant="contained" color="primary">Send Message</Button>
        <TextField label="Name" fullWidth variant="outlined" />
        <TextField label="Email" fullWidth variant="outlined" />
        <TextField label="Message" fullWidth variant="outlined" multiline rows={4} />
        <Button variant="contained" color="primary">Send Message</Button>
        <TextField label="Name" fullWidth variant="outlined" />
        <TextField label="Email" fullWidth variant="outlined" />
        <TextField label="Message" fullWidth variant="outlined" multiline rows={4} />
        <Button variant="contained" color="primary">Send Message</Button>
        <TextField label="Name" fullWidth variant="outlined" />
        <TextField label="Email" fullWidth variant="outlined" />
        <TextField label="Message" fullWidth variant="outlined" multiline rows={4} />
        <Button variant="contained" color="primary">Send Message</Button>
        
      </Stack>
    </Paper>
  );
}