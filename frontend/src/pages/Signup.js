// src/pages/Signup.js
import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import api from "../utils/api";
import SignupStyle from "./styles/SignupStyle";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post("/signup/", { username, password });
      alert("회원가입 성공!");
      setUsername("");
      setPassword("");
    } catch (error) {
      alert("회원가입 실패: " + error.response?.data?.message || "오류 발생");
    }
  };

  return (
    <Container sx={SignupStyle.container}>
      <Typography variant="h4" gutterBottom>
        회원가입
      </Typography>
      <form onSubmit={handleSubmit} style={SignupStyle.form}>
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
        <Button type="submit" variant="contained" color="primary" sx={SignupStyle.button}>
          회원가입
        </Button>
      </form>
    </Container>
  );
};

export default Signup;
