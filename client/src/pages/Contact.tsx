import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

export default function Contact() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>오시는 길</Typography>
      <Typography variant="body1">주소: 서울특별시 금천구 가산디지털1로 99</Typography>
      <Typography variant="body1" gutterBottom>연락처: 02-1234-5678</Typography>
      <Box sx={{ mt: 2 }}>
        <iframe
          src="https://maps.google.com/maps?q=서울특별시 금천구 가산디지털1로 99&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="지도"
        />
      </Box>
      <Box component="form" sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="이름" fullWidth />
        <TextField label="이메일" fullWidth />
        <TextField label="문의 내용" multiline rows={4} fullWidth />
        <Button variant="contained">문의 보내기</Button>
      </Box>
    </Box>
  );
}
