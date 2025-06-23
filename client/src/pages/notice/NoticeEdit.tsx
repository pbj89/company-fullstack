import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

export default function NoticeEdit({ notices, setNotices }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const notice = notices.find(n => n.id === parseInt(id));

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (notice) {
      setTitle(notice.title);
      setContent(notice.content);
    }
  }, [notice]);

  const handleUpdate = () => {
    const updated = notices.map(n => n.id === notice.id ? { ...n, title, content } : n);
    setNotices(updated);
    navigate('/notice');
  };

  if (!notice) return <Typography>존재하지 않는 글입니다.</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>공지사항 수정</Typography>
      <TextField label="제목" fullWidth sx={{ mb: 2 }} value={title} onChange={e => setTitle(e.target.value)} />
      <TextField label="내용" fullWidth multiline rows={5} value={content} onChange={e => setContent(e.target.value)} />
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleUpdate}>수정 완료</Button>
    </Box>
  );
}
