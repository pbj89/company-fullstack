
import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { loginUser } from "@/services/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await loginUser(email, password);
    if (error) alert(error.message);
    else alert("로그인 성공!");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>로그인</Typography>
      <TextField fullWidth label="Email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField fullWidth type="password" label="비밀번호" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>로그인</Button>
    </Box>
  );
}
