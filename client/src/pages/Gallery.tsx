import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

export default function Gallery() {
  const images = ['sample1.jpg', 'sample2.jpg', 'sample3.jpg'];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>갤러리</Typography>
      <Grid container spacing={2}>
        {images.map((img, i) => (
          <Grid item xs={12} sm={4} key={i}>
            <Box
              component="img"
              src={`/assets/${img}`}  // ✅ 백틱만 사용하고 역슬래시 없이
              alt={img}
              sx={{ width: '100%', borderRadius: 2 }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
