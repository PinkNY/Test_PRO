// src/pages/CreateRequest.js
import React, { useState } from "react";
import { Container, TextField, Button, Typography, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import CreateRequestStyles from "./styles/CreateRequestStyle";

const CreateRequest = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ title, description, category });
    alert("요청이 성공적으로 제출되었습니다!");
    setTitle("");
    setDescription("");
    setCategory("");
  };

  return (
    <Container sx={CreateRequestStyles.container}>
      <Typography variant="h4" gutterBottom>
        요청 작성
      </Typography>
      <form style={CreateRequestStyles.form} onSubmit={handleSubmit}>
        <TextField
          label="제목"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="설명"
          variant="outlined"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        {/* 카테고리 선택 */}
        <FormControl fullWidth>
          <InputLabel id="category-label">카테고리</InputLabel>
          <Select
            labelId="category-label"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            sx={CreateRequestStyles.select}
            required
          >
            <MenuItem value="영상 편집">영상 편집</MenuItem>
            <MenuItem value="모션 그래픽">모션 그래픽</MenuItem>
            <MenuItem value="자막 편집">자막 편집</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={CreateRequestStyles.button}
        >
          제출
        </Button>
      </form>
    </Container>
  );
};

export default CreateRequest;
