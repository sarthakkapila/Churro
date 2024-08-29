import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { Container, Box, Typography, Link } from "@mui/material";
import React from "react";

const AboutUs = () => {
  return (
    <Box sx={{ pb: 3 }}>
      <Navbar />
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography variant="h2" gutterBottom>
          About Cheddar 🧀
        </Typography>

        <Typography variant="h4" gutterBottom>
          Project Description
        </Typography>
        <Typography variant="body1" paragraph>
          Cheddar is our groundbreaking global chat platform that enables users to purchase meme coins using Solana actions and blinks. This document provides an overview of our project components for internal reference.
        </Typography>

        <Typography variant="h4" gutterBottom>
          Project Components
        </Typography>

        <Typography variant="h5" gutterBottom>
          1. Churro - Web Application (Next.js)
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Lead Developer:</strong> [N/A]
          <br />
          <strong>Repository:</strong> <Link href="https://github.com/Cheddar-org/Cheddar/tree/main/churro" target="_blank" rel="noopener">GitHub Repository</Link>
          <br />
          <strong>Key Features:</strong>
          <ul>
            <li>Landing page</li>
            <li>FAQs about the product</li>
            <li>Links to the beta</li>
            <li>Leaderboard page for airdrops</li>
          </ul>
        </Typography>

        <Typography variant="h5" gutterBottom>
          2. Dumpling - Mobile Application (React Native)
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Lead Developer:</strong> Shauray Dhingra
          <br />
          <strong>Repository:</strong> <Link href="https://github.com/Cheddar-org/Cheddar/tree/main/dumpling" target="_blank" rel="noopener">GitHub Repository</Link>
          <br />
          <strong>Key Features:</strong>
          <ul>
            <li>iOS and Android compatibility</li>
            <li>Mobile-optimized interface to buy meme coins</li>
            <li>Live chat</li>
            <li>Secure mobile wallet integration</li>
            <li>Optimized for Solana Actions</li>
          </ul>
        </Typography>

        <Typography variant="h5" gutterBottom>
          3. Baklava - Chat Server
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Lead Developer:</strong> Armaan Verma
          <br />
          <strong>Repository:</strong> <Link href="https://github.com/Cheddar-org/Cheddar/tree/main/baklava" target="_blank" rel="noopener">GitHub Repository</Link>
          <br />
          <strong>Key Features:</strong>
          <ul>
            <li>Real-time messaging system backend</li>
            <li>Chatroom management</li>
            <li>Message history and retrieval</li>
            <li>User presence tracking</li>
            <li>Storage of users and messages</li>
          </ul>
        </Typography>

        <Typography variant="h5" gutterBottom>
          4. Sushi - Blinks Server
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Lead Developer:</strong> Sarthak Kapila
          <br />
          <strong>Repository:</strong> <Link href="https://github.com/Cheddar-org/Cheddar/tree/main/sushi" target="_blank" rel="noopener">GitHub Repository</Link>
          <br />
          <strong>Key Features:</strong>
          <ul>
            <li>High-frequency blink processing</li>
            <li>Integration with chat and trading systems</li>
            <li>Performance monitoring and optimization</li>
            <li>Optimized coin swaps via various exchanges</li>
          </ul>
        </Typography>

        <Typography variant="h4" gutterBottom>
          Development Guidelines
        </Typography>
        <Typography variant="body1" paragraph>
          - All code must adhere to our internal coding standards
          <br />
          - Use linting and formatting tools
          <br />
          - Commit messages should follow our standardized format
          <br />
          - All features must be thoroughly tested before submitting for review
        </Typography>

        <Typography variant="h4" gutterBottom>
          Developer Contact Information
        </Typography>
        <Typography variant="body1" paragraph>
          - Armaan Verma: <Link href="https://github.com/Ormon-huehuehue" target="_blank" rel="noopener">GitHub</Link>, <Link href="mailto:armnvrma10@gmail.com">Email</Link>
          <br />
          - Shauray Dhingra: <Link href="https://github.com/Shauray018" target="_blank" rel="noopener">GitHub</Link>, <Link href="mailto:shauraydhingra03@gmail.com">Email</Link>
          <br />
          - Sarthak Kapila: <Link href="https://github.com/sarthakkapila" target="_blank" rel="noopener">GitHub</Link>, <Link href="mailto:sarthakkapila1@gmail.com">Email</Link>
        </Typography>

        <Typography variant="h4" gutterBottom>
          Confidentiality Notice
        </Typography>
        <Typography variant="body1" paragraph>
          This document and all associated project materials are strictly confidential. Do not share any information outside of the organization members.
        </Typography>
      </Container>
      <Footer />
    </Box>
  );
};

export default AboutUs;
