import { Box, Typography, List, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const dummyNotices = [
  { id: 1, title: "공지사항 1", date: "2025-06-01" },
  { id: 2, title: "공지사항 2", date: "2025-06-05" },
  { id: 3, title: "공지사항 3", date: "2025-06-08" },
];

export default function NoticeList() {
  const navigate = useNavigate();

  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>공지사항</Typography>
      <List>
        {dummyNotices.map((notice) => (
          <ListItemButton key={notice.id} onClick={() => navigate(`/notice/${notice.id}`)}>
            <Box display="flex" justifyContent="space-between" width="100%">
              <Typography>{notice.title}</Typography>
              <Typography variant="body2">{notice.date}</Typography>
            </Box>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
