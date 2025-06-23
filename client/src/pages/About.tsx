import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

export default function About() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>회사 소개</Typography>
      <Typography variant="body1" paragraph>
        우리는 정밀 가공 및 제조 분야에서 수년간의 경험을 바탕으로 고객에게 최고의 품질을 제공합니다.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">비전</Typography>
      <Typography variant="body2" paragraph>첨단 기술을 활용한 혁신적인 생산 솔루션 제공</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">연혁</Typography>
      <ul>
        <li>2020년 - 회사 설립</li>
        <li>2022년 - 생산설비 확장</li>
        <li>2025년 - 글로벌 파트너십 체결</li>
      </ul>
    </Box>
  );
}
