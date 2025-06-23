import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom"; // ✅ 추가

export default function Layout() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" width="100%">
      <Header />
      <Box component="main" flex={1} px={{ xs: 2, md: 8 }} py={4}>
        <Outlet /> {/* ✅ 자식 페이지를 여기에 렌더링 */}
      </Box>
      <Footer />
    </Box>
  );
}
