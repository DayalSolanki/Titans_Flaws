import { useState } from "react";
import React from "react";
import { Box, Button, TextField, Typography, Link } from "@mui/material";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token); // Store JWT token
      alert("Login Successful!");
      window.location.href = "/dashboard"; // Redirect to dashboard
    } else {
      setError(data.message); // Show error message
    }
  };
 
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: "url('https://solutionsreview.com/enterprise-resource-planning/files/2017/06/Enterprise-Cloud-Strategy-1.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 350,
          backgroundColor: "rgba(0,0,0,0.2)",
          color: "white",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Titan Flaws
        </Typography>
        <TextField
          fullWidth
          label="Ep ID"
          variant="filled"
          sx={{ backgroundColor: "white", borderRadius: 1, mb: 2 }}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="filled"
          sx={{ backgroundColor: "white", borderRadius: 1, mb: 2 }}
          onChange={(e)=>setPassword(e.target.value)}
        />
        {error && <Typography color="red">{error}</Typography>}
        <Link href="#" color="inherit" sx={{ display: "block", mb: 2 }}>
          Forget Password
        </Link>
        <Button fullWidth variant="contained" sx={{ backgroundColor: "green", mb: 2 }} onClick={handleSubmit}>
          Sign in
        </Button>
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Don't have an account? <Link href="/registration" color="inherit">Register here</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
