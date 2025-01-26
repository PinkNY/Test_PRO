// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CreateRequest from "./pages/CreateRequest";
import RequestList from "./pages/RequestList";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup"; // 회원가입 컴포넌트 import
import Login from "./pages/Login";   // 로그인 컴포넌트 import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-request" element={<CreateRequest />} />
        <Route path="/request-list" element={<RequestList />} />
        <Route path="/signup" element={<Signup />} /> {/* 회원가입 경로 */}
        <Route path="/login" element={<Login />} />   {/* 로그인 경로 */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
