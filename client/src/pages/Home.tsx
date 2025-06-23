import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        회사 홈페이지에 오신 걸 환영합니다
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        아래 버튼을 통해 로그인하거나 회원가입하세요.
      </Typography>
      <Button variant="contained" sx={{ mr: 2 }} onClick={() => navigate("/login")}>
        로그인
      </Button>
      <Button variant="outlined" onClick={() => navigate("/register")}>
        회원가입
      </Button>
    </Box>
  );
};

export default Home;
