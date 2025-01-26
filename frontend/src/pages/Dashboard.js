import React from "react";
import { Container, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import CustomPieChart from "../components/CustomPieChart";
import DashboardStyles from "./styles/DashboardStyle";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
    const data = {
      labels: ["대기 중", "진행 중", "완료"],
      datasets: [
        {
          data: [10, 5, 15],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    };
  
    const cardData = [
      { title: "대기 중 요청", value: 10 },
      { title: "진행 중", value: 5 },
      { title: "완료", value: 15 },
    ];
  
    return (
      <Container sx={DashboardStyles.container}>
        <Typography variant="h4" gutterBottom>
          대시보드
        </Typography>
        <div style={DashboardStyles.chartWithBoxes}>
          {/* CustomPieChart로 차트를 렌더링 */}
          <div style={DashboardStyles.chartWrapper}>
            <CustomPieChart data={data} />
          </div>
          {/* 박스 */}
          <div style={DashboardStyles.boxContainer}>
            {cardData.map((card, index) => (
              <div key={index} style={DashboardStyles.cardItem}>
                <Typography sx={DashboardStyles.cardTitle}>
                  {card.title}
                </Typography>
                <Typography sx={DashboardStyles.cardValue}>
                  {card.value}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Container>
    );
  };
  
  export default Dashboard;
