// src/pages/styles/RequestListStyle.js
const RequestListStyles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      textAlign: "center",
      padding: "20px",
    },
    filterButtons: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginBottom: "20px",
    },
    button: {
      padding: "10px 20px",
      border: "1px solid #007bff",
      borderRadius: "4px",
      backgroundColor: "#f9f9f9",
      cursor: "pointer",
      transition: "all 0.3s",
      '&:hover': {
        backgroundColor: "#007bff",
        color: "#fff",
      },
    },
    cardContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "20px",
    },
    card: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "20px",
      width: "200px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
      textAlign: "center",
    },
    statusPending: {
      color: "#f39c12",
    },
    statusInProgress: {
      color: "#3498db",
    },
    statusCompleted: {
      color: "#2ecc71",
    },
  };
  
  export default RequestListStyles;
  