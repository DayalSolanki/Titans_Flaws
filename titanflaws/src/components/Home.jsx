import React from "react";
import { Grid, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner"
import Navbar from "../common/Navbar"

const Home = () => {
  const navigate = useNavigate();

  const sections = [
    { label: "Inventory", path: "/inventory" },
    { label: "Shipping", path: "/shipping" },
    { label: "Salary/Fee", path: "/salary-fee" },
    { label: "Attendance", path: "/attendance" }
  ];

  return (
    <div style={{ padding: "20px", background: "#880890", height: "auto" }}>
      <Navbar/>
      <Banner/>
      <Grid container spacing={3} justifyContent="center" marginTop={4}>
        {sections.map((section, index) => (
          <Grid item xs={12} sm={5} key={index}>
            <Paper
              elevation={3}
              style={{
                padding: "30px",
                textAlign: "center",
                background: "#d3d3d3",
                cursor: "pointer"
              }}
              onClick={() => navigate(section.path)}
            >
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                {section.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
