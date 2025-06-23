import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';

export default function Services() {
  const serviceItems = [
    { title: '정밀 가공', desc: '고정밀 장비를 이용한 부품 가공' },
    { title: '설계 및 조립', desc: '고객 요구에 맞춘 설계 및 완제품 조립' },
    { title: '품질 검사', desc: '최첨단 측정 장비로 품질 보증' },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>서비스 소개</Typography>
      <Grid container spacing={3}>
        {serviceItems.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">{item.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
