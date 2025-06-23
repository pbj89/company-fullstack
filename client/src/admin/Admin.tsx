import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Admin() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">관리자 페이지</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        여기에 공지사항 작성 및 사이트 관리 기능을 추가할 수 있습니다.
      </Typography>
    </Box>
  );
}
