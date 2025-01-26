// src/pages/Login.js
import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import api, { setAuthToken } from "../utils/api";
import LoginStyle from "./styles/LoginStyle";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("/login/", { username, password });
      localStorage.setItem("token", response.data.token);
      setAuthToken(response.data.token);
      alert("로그인 성공!");
      setUsername("");
      setPassword("");
    } catch (error) {
      alert("로그인 실패: " + error.response?.data?.message || "오류 발생");
    }
  };

  return (
    <Container sx={LoginStyle.container}>
      <Typography variant="h4" gutterBottom>
        로그인
      </Typography>
      <form onSubmit={handleSubmit} style={LoginStyle.form}>
        <TextField
          label="아이디"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="비밀번호"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={LoginStyle.button}>
          로그인
        </Button>
      </form>
    </Container>
  );
};

export default Login;
