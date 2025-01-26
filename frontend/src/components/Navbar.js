// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          영상 요청 플랫폼
        </Typography>
        <Button color="inherit" component={Link} to="/">
          대시보드
        </Button>
        <Button color="inherit" component={Link} to="/create-request">
          요청 작성
        </Button>
        <Button color="inherit" component={Link} to="/request-list">
          요청 목록
        </Button>
        <Button color="inherit" component={Link} to="/profile">
          프로필
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
