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

        <Typography variant="body1" paragraph>
          🚀 Dive into the ultimate Solana chat room! Connect with fellow degens, share the latest alpha, and plan your next big move. Whether you’re ready to ape into the hottest tokens or chill with the SOL squad, our platform is where the magic happens. 🔗 Sync your Phantom wallet, join the conversation, and be part of a global network where every chat could lead to your next moonshot. 🌟 Your crypto adventure starts here – where on-chain innovation meets community hustle. Let’s go!
        </Typography>

        <Typography variant="h4" gutterBottom>
          Project Components
        </Typography>

        <Typography variant="h5" gutterBottom>
          1. Churro - Web Application (Next.js)
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Live Link:</strong> <Link href="https://cheddarchat.vercel.app/" target="_blank" rel="noopener">https://cheddarchat.vercel.app/</Link>
          <br />
          <strong>Repository:</strong> <Link href="https://github.com/Cheddar-org/CheddarApp/tree/main/churro" target="_blank" rel="noopener">GitHub Repository</Link>
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
          <strong>Note:</strong> Dumpling is only working on iOS as of now.
          <br />
          <strong>Live Link:</strong> <Link href="https://expo.dev/preview/update?message=fix&updateRuntimeVersion=1.0.0&createdAt=2024-08-31T04%3A07%3A54.668Z&slug=exp&projectId=76caef8e-27a8-46a4-a727-e8752a403b4d&group=1954efcb-452c-488b-be3a-c7951e6e40a8" target="_blank" rel="noopener">Expo Preview</Link>
          <br />
          <strong>Repository:</strong> <Link href="https://github.com/Cheddar-org/CheddarApp/tree/main/dumpling" target="_blank" rel="noopener">GitHub Repository</Link>
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
          3. Baklava - Global Chat Server (Cloudflare Workers)
        </Typography>
        <Typography variant="body1" paragraph>
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
          <strong>Key Features:</strong>
          <ul>
            <li>High-frequency blink processing</li>
            <li>Integration with chat and trading systems</li>
            <li>Performance monitoring and optimization</li>
            <li>Optimized coin swaps via various exchanges</li>
          </ul>
        </Typography>

        <Typography variant="h4" gutterBottom>
          Environment Variables
        </Typography>
        <Typography variant="body1" paragraph>
          To run this project, you will need to add the following environment variables to your `.env` file in the `cheddarApp/dumpling` directory:
          <br />
          <code>EXPO_PUBLIC_SUPABASE_URL</code>
          <br />
          <code>EXPO_PUBLIC_SUPABASE_ANON_KEY</code>
        </Typography>

        <Typography variant="h4" gutterBottom>
          Demo Video
        </Typography>
        <Typography variant="body1" paragraph>
          <Link href="https://youtu.be/1jgTON-5uuI" target="_blank" rel="noopener">**DEMO VIDEO**</Link>
        </Typography>

        <Typography variant="h4" gutterBottom>
          Installation
        </Typography>
        <Typography variant="body1" paragraph>
          Install the project with npm or bun:
        </Typography>
        <Typography variant="body1" paragraph>
          <code>git clone https://github.com/Cheddar-org/CheddarApp</code>
          <br />
          <code>cd cheddarApp</code>
        </Typography>
        <Typography variant="body1" paragraph>
          Navigate to the Dumpling directory:
        </Typography>
        <Typography variant="body1" paragraph>
          <code>cd Dumpling</code>
        </Typography>
        <Typography variant="body1" paragraph>
          Install necessary dependencies:
        </Typography>
        <Typography variant="body1" paragraph>
          <code>bun install</code>
          <br />
          <strong>or</strong>
          <br />
          <code>npm install</code>
        </Typography>
        <Typography variant="body1" paragraph>
          Create a `.env` file in the root of the project and add the required environment variables.
        </Typography>
        <Typography variant="body1" paragraph>
          Start the project:
        </Typography>
        <Typography variant="body1" paragraph>
          <code>bun start</code>
          <br />
          <strong>or</strong>
          <br />
          <code>npm start</code>
        </Typography>
        <Typography variant="body1" paragraph>
          Expo opens in development mode by default. Press 'S' in the terminal to switch to Expo Go. Install Expo Go on your device (the app only works on iOS as of now). Scan the QR code and select Expo Go in the options. Wait for it to finish building and start testing.
        </Typography>

        <Typography variant="h4" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body1" paragraph>
          For any queries, reach out to:
          <br />
          <Link href="mailto:sarthakkapila1@gmail.com" target="_blank" rel="noopener">sarthakkapila1@gmail.com</Link>
        </Typography>
      </Container>
      <Footer />
    </Box>
  );
};

export default AboutUs;
