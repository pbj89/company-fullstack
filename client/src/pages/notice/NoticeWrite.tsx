import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NoticeWrite({ addNotice }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newNotice = {
      id: Date.now(),
      title,
      content,
      date: new Date().toISOString().split('T')[0],
    };
    addNotice(newNotice);
    navigate('/notice');
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>공지사항 작성</Typography>
      <TextField label="제목" fullWidth sx={{ mb: 2 }} value={title} onChange={e => setTitle(e.target.value)} />
      <TextField label="내용" fullWidth multiline rows={5} value={content} onChange={e => setContent(e.target.value)} />
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>작성 완료</Button>
    </Box>
  );
}
