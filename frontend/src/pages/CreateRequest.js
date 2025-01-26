// src/pages/CreateRequest.js
import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";

const CreateRequest = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Request Submitted:", { title, description });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Create a New Request
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          fullWidth
          label="Description"
          margin="normal"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default CreateRequest;
