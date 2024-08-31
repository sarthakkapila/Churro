import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { Container, Box, Typography } from "@mui/material";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <Box sx={{ pb: 3 }}>
      <Navbar />
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography variant="h2" gutterBottom>
          Privacy Policy
        </Typography>

        <Typography variant="h4" gutterBottom>
          1. Introduction
        </Typography>
        <Typography variant="body1" paragraph>
          We value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
        </Typography>

        <Typography variant="h4" gutterBottom>
          2. Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We collect information that you provide to us directly, such as when you create an account or contact us. We also collect information automatically, such as your IP address and browsing behavior.
        </Typography>

        <Typography variant="h4" gutterBottom>
          3. How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We use your information to provide and improve our services, to communicate with you, and to ensure the security of our platform. We do not share your information with third parties except as required by law or with your consent.
        </Typography>

        <Typography variant="h4" gutterBottom>
          4. Data Security
        </Typography>
        <Typography variant="body1" paragraph>
          We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure.
        </Typography>

        <Typography variant="h4" gutterBottom>
          5. Your Rights
        </Typography>
        <Typography variant="body1" paragraph>
          You have the right to access, correct, or delete your personal information. You may also opt-out of receiving promotional communications from us at any time.
        </Typography>

        <Typography variant="h4" gutterBottom>
          6. Changes to Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of our services constitutes your acceptance of the updated policy.
        </Typography>

        <Typography variant="h4" gutterBottom>
          7. Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about this Privacy Policy, please contact us at org.cheddar@gmail.com.
        </Typography>
      </Container>
      <Footer />
    </Box>
  );
};

export default PrivacyPolicy;
