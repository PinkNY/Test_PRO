// src/components/Navbar.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token"); // 로그인 상태 확인

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("로그아웃 되었습니다.");
    navigate("/login");
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            영상 요청 플랫폼
          </Link>
        </Typography>
        <Box sx={{ display: "flex", gap: "15px" }}>
          <Button color="inherit" component={Link} to="/">
            대시보드
          </Button>
          <Button color="inherit" component={Link} to="/create-request">
            요청 작성
          </Button>
          <Button color="inherit" component={Link} to="/request-list">
            요청 목록
          </Button>
          {isAuthenticated ? (
            <>
              <Button color="inherit" component={Link} to="/profile">
                프로필
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/signup">
                회원가입
              </Button>
              <Button color="inherit" component={Link} to="/login">
                로그인
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
