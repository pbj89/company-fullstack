import { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

export default function Notice() {
  const { token, isAdmin } = useAuth();
  const [notices, setNotices] = useState([]);
  const [newNotice, setNewNotice] = useState({ title: "", content: "", image: null });

  const fetchNotices = async () => {
    const res = await fetch("http://localhost:4000/api/notices");
    const data = await res.json();
    setNotices(data);
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", newNotice.title);
    formData.append("content", newNotice.content);
    if (newNotice.image) formData.append("image", newNotice.image);

    await fetch("http://localhost:4000/api/notices", {
      method: "POST",
      headers: { Authorization: token },
      body: formData,
    });
    setNewNotice({ title: "", content: "", image: null });
    fetchNotices();
  };

  return (
    <Box p={2}>
      <Typography variant="h5">공지사항</Typography>
      {isAdmin && (
        <Box my={2}>
          <TextField label="제목" fullWidth margin="dense" value={newNotice.title}
            onChange={e => setNewNotice({ ...newNotice, title: e.target.value })} />
          <TextField label="내용" fullWidth multiline rows={4} margin="dense" value={newNotice.content}
            onChange={e => setNewNotice({ ...newNotice, content: e.target.value })} />
          <input type="file" onChange={e => setNewNotice({ ...newNotice, image: e.target.files[0] })} />
          <Button variant="contained" onClick={handleSubmit}>작성</Button>
        </Box>
      )}
      {notices.map(n => (
        <Box key={n.id} my={2} p={2} border="1px solid #ccc">
          <Typography variant="h6">{n.title}</Typography>
          <Typography>{n.content}</Typography>
          {n.image && <img src={`http://localhost:4000${n.image}`} style={{ width: 200 }} />}
        </Box>
      ))}
    </Box>
  );
}
