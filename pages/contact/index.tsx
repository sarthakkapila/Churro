import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import React from "react";

const ContactUs = () => {
  return (
    <Box sx={{ pb: 3 }}>
      <Navbar />
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography variant="h2" gutterBottom>
          Contact Us
        </Typography>

        <Typography variant="body1" paragraph>
          We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out using the form below.
        </Typography>

        <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
          <TextField
            fullWidth
            id="name"
            label="Name"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            id="email"
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            required
          />
          <TextField
            fullWidth
            id="message"
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default ContactUs;
