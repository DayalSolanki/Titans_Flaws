import React from "react";
import { Grid, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner"
import Navbar from "../common/Navbar"

const Home = () => {
  const navigate = useNavigate();

  const sections = [
    { label: "Your Task", path: "/task" },
    { label: "Check Salary", path: "/salary-fee" },
    { label: "View Attendance", path: "/attendance" }
  ];

  return (
    <div style={{ padding: "20px", background: "", height: "auto" }}>
      <Banner/>
      <Grid container spacing={3} justifyContent="center" marginTop={4}>
        {sections.map((section, index) => (
          <Grid item xs={12} sm={5} key={index}>
            <Paper
              elevation={3}
              style={{
                padding: "30px",
                textAlign: "center",
                background: "#0a2540",
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
