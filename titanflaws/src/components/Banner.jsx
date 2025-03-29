import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('https://healthtechmagazine.net/sites/healthtechmagazine.net/files/styles/cdw_hero/public/articles/%5Bcdw_tech_site%3Afield_site_shortname%5D/201811/Untitled-2_1.png.jpg?itok=nLzivqkd')`,
        mt:3,
        height: '500px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        animation: 'fadeIn 2s ease-in-out'
      }}
    >
      <Box>
        <Typography variant="h2" color='#0a2540' sx={{ fontWeight: "bold", mb: 2 }}>
        Streamline. Optimize. Succeed. – Empower Your Business with ERP!
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Explore Now
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
