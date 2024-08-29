import React from "react";
import { Typography, Container, Box } from "@mui/material";

const Section5 = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 15, mb: 10 }}>
      <Typography
        variant="h3"
        gutterBottom
        align="center"
        sx={{
          fontWeight: 'bold',
          color: 'primary.main',
          mb: 3,
        }}
      >
        🌐 Global Chat Room
      </Typography>

      <Typography
        sx={{
          letterSpacing: "3px",
          maxWidth: 1000,
          mb: 4,
          fontSize: { xs: 'body1', sm: 'h6' },
          color: 'text.secondary',
          allign: 'center',
          lineHeight: 2.2,
        }}
      >
        🚀 Dive into the ultimate Solana chat room! Connect with fellow degens, share the latest alpha, and plan your next big move. Whether you’re ready to ape into the hottest tokens or chill with the SOL squad, our platform is where the magic happens.
        <br />

        🔗 Sync your Phantom wallet, join the conversation, and be part of a global network where every chat could lead to your next moonshot.
        <br />
        🌟 Your crypto adventure starts here – where on-chain innovation meets community hustle. Let’s go!
      </Typography>

      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography
          variant="body1"
          color="text.primary"
        >
          💬 Ready to dive in? Connect now and explore the future of crypto with us!
        </Typography>
      </Box>
    </Container>
  );
};

export default Section5;
