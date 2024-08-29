import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { Container, Box, Typography } from "@mui/material";
import React from "react";

const TermsOfService = () => {
  return (
    <Box sx={{ pb: 3 }}>
      <Navbar />
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography variant="h2" gutterBottom>
          Terms of Service
        </Typography>

        <Typography variant="h4" gutterBottom>
          1. Introduction
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our platform! These Terms of Service ("Terms") govern your use of our services. By accessing or using our services, you agree to comply with these Terms.
        </Typography>

        <Typography variant="h4" gutterBottom>
          2. User Responsibilities
        </Typography>
        <Typography variant="body1" paragraph>
          You agree to use our platform responsibly and to comply with all applicable laws and regulations. You are responsible for any content you post and for maintaining the confidentiality of your account.
        </Typography>

        <Typography variant="h4" gutterBottom>
          3. Intellectual Property
        </Typography>
        <Typography variant="body1" paragraph>
          All content and materials on our platform are owned by us or our licensors. You may not use, reproduce, or distribute any content without our prior written permission.
        </Typography>

        <Typography variant="h4" gutterBottom>
          4. Limitation of Liability
        </Typography>
        <Typography variant="body1" paragraph>
          We are not liable for any indirect, incidental, or consequential damages arising from your use of our platform. Our total liability is limited to the maximum extent permitted by law.
        </Typography>

        <Typography variant="h4" gutterBottom>
          5. Changes to Terms
        </Typography>
        <Typography variant="body1" paragraph>
          We may update these Terms from time to time. We will notify you of any significant changes by posting the updated Terms on our platform. Your continued use of our services constitutes your acceptance of the updated Terms.
        </Typography>

        <Typography variant="h4" gutterBottom>
          6. Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about these Terms, please contact us at support@yourplatform.com.
        </Typography>
      </Container>
      <Footer />
    </Box>
  );
};

export default TermsOfService;
