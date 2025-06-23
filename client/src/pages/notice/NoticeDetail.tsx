import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const dummyNotices = [
  { id: 1, title: "공지사항 1", content: "첫 번째 공지입니다.", date: "2025-06-01" },
  { id: 2, title: "공지사항 2", content: "두 번째 공지입니다.", date: "2025-06-05" },
  { id: 3, title: "공지사항 3", content: "세 번째 공지입니다.", date: "2025-06-08" },
];

export default function NoticeDetail() {
  const { id } = useParams();
  const notice = dummyNotices.find(n => n.id.toString() === id);

  if (!notice) return <Typography>공지사항을 찾을 수 없습니다.</Typography>;

  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>{notice.title}</Typography>
      <Typography variant="body2" color="text.secondary">{notice.date}</Typography>
      <Box mt={2}>
        <Typography>{notice.content}</Typography>
      </Box>
    </Box>
  );
}
