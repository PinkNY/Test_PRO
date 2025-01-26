// src/pages/styles/DashboardStyle.js
const DashboardStyles = {
    container: {
      textAlign: "center",
      padding: "20px 0",
    },
    chartWithBoxes: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "40px", // 차트와 박스 간격 넓히기
      flexWrap: "wrap", // 반응형을 위해 줄바꿈 허용
    },
    chartWrapper: {
      width: "60%",
    },
    boxContainer: {
      display: "flex",
      flexDirection: "column", // 세로 정렬
      gap: "20px", // 박스 간의 간격 넓히기
    },
    cardItem: {
      border: "1px solid #ddd",
      padding: "20px", // 내부 여백 조정
      borderRadius: "8px",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f9f9f9",
      margin: "30px 0", // 각 박스 사이 간격 추가
    },
    cardTitle: {
      fontSize: "1.2rem",
      marginBottom: "8px",
    },
    cardValue: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#007bff",
    },
  };
  
  export default DashboardStyles;
  