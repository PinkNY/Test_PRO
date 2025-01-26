// src/pages/RequestList.js
import React, { useState } from "react";
import { Container, Typography, Button, Grid } from "@mui/material";

const RequestList = () => {
  const [filter, setFilter] = useState("all");
  const requests = [
    { id: 1, title: "Video Editing", status: "Pending" },
    { id: 2, title: "Motion Graphics", status: "In Progress" },
    { id: 3, title: "Subtitle Editing", status: "Completed" },
  ];

  const filteredRequests =
    filter === "all"
      ? requests
      : requests.filter((req) => req.status === filter);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Request List
      </Typography>
      <Button onClick={() => setFilter("all")}>All</Button>
      <Button onClick={() => setFilter("Pending")}>Pending</Button>
      <Button onClick={() => setFilter("In Progress")}>In Progress</Button>
      <Button onClick={() => setFilter("Completed")}>Completed</Button>
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        {filteredRequests.map((req) => (
          <Grid item xs={12} md={4} key={req.id}>
            <div style={{ border: "1px solid #ccc", padding: "20px" }}>
              <Typography variant="h6">{req.title}</Typography>
              <Typography variant="body1">{req.status}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RequestList;
