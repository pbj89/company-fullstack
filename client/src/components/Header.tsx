import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:768px)");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const goTo = (path: string) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1e2a36" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{ color: "#fff", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          회사 로고
        </Typography>
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={() => goTo("/")}>Home</MenuItem>
              <MenuItem onClick={() => goTo("/notice")}>공지사항</MenuItem>
              <MenuItem onClick={() => goTo("/auth/login")}>로그인</MenuItem>
              <MenuItem onClick={() => goTo("/auth/register")}>회원가입</MenuItem>
            </Menu>
          </>
        ) : (
          <Box>
            <Button sx={{ color: "#fff" }} onClick={() => goTo("/")}>Home</Button>
            <Button sx={{ color: "#fff" }} onClick={() => goTo("/notice")}>공지사항</Button>
            <Button sx={{ color: "#fff" }} onClick={() => goTo("/auth/login")}>로그인</Button>
            <Button sx={{ color: "#fff" }} onClick={() => goTo("/auth/register")}>회원가입</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
