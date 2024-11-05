import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  const navigate = useNavigate();

  useEffect(() => {
    // Here you would typically make an API call to fetch user data
    // Using placeholder data for demonstration
    setUsername("John Doe");
    setRole("User");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>JWT Token:</strong> {token}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
