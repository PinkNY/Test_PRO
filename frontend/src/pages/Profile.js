// src/pages/Profile.js
import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import api from "../utils/api";
import ProfileStyle from "./styles/ProfileStyle";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/profile/");
        setProfile(response.data);
      } catch (error) {
        alert("프로필 정보를 가져오는 데 실패했습니다.");
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <Typography>로딩 중...</Typography>;
  }

  return (
    <Container sx={ProfileStyle.container}>
      <Typography variant="h4" gutterBottom>
        프로필
      </Typography>
      <Typography>아이디: {profile.username}</Typography>
      <Typography>이메일: {profile.email}</Typography>
    </Container>
  );
};

export default Profile;
