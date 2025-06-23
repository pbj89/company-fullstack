
import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { registerUser } from "@/services/authService";
import { toast } from "react-toastify";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      toast.error("모든 항목을 입력해 주세요.");
      return;
    }
    if (password.length < 6) {
      toast.error("비밀번호는 최소 6자 이상이어야 합니다.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("비밀번호가 일치하지 않습니다.");
      return;
    }

    const { error } = await registerUser(email, password);
    if (error) {
      console.error("회원가입 에러:", error);
      toast.error("회원가입 실패: " + error.message);
    } else {
      toast.success("회원가입 성공!");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>회원가입</Typography>
      <TextField fullWidth label="Email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField fullWidth type="password" label="비밀번호" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
      <TextField fullWidth type="password" label="비밀번호 확인" margin="normal" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>회원가입</Button>
    </Box>
  );
}
