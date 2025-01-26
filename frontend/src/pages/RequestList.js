// src/pages/RequestList.js
import React, { useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import RequestListStyles from "./styles/RequestListStyle";

const RequestList = () => {
  const [filter, setFilter] = useState("전체"); // 필터 기본값 설정

  // 요청 데이터
  const requests = [
    { id: 1, title: "영상 편집", status: "대기 중" },
    { id: 2, title: "모션 그래픽", status: "진행 중" },
    { id: 3, title: "자막 편집", status: "완료" },
  ];

  // 필터링된 요청 데이터
  const filteredRequests =
    filter === "전체"
      ? requests
      : requests.filter((request) => request.status === filter);

  return (
    <Container sx={RequestListStyles.container}>
      <Typography variant="h4" gutterBottom>
        요청 목록
      </Typography>
      {/* 필터 버튼 */}
      <div style={RequestListStyles.filterButtons}>
        {["전체", "대기 중", "진행 중", "완료"].map((status) => (
          <Button
            key={status}
            variant="outlined"
            color={filter === status ? "primary" : "inherit"}
            onClick={() => setFilter(status)}
            sx={RequestListStyles.button}
          >
            {status}
          </Button>
        ))}
      </div>
      {/* 요청 카드 */}
      <div style={RequestListStyles.cardContainer}>
        {filteredRequests.map((request) => (
          <div key={request.id} style={RequestListStyles.card}>
            <Typography variant="h6">{request.title}</Typography>
            <Typography
              sx={
                request.status === "대기 중"
                  ? RequestListStyles.statusPending
                  : request.status === "진행 중"
                  ? RequestListStyles.statusInProgress
                  : RequestListStyles.statusCompleted
              }
            >
              {request.status}
            </Typography>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default RequestList;
