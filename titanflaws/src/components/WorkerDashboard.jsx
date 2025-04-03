
import React, { useState, useEffect } from "react";
import { Grid, TextField, Avatar, Typography, Box } from "@mui/material";
import attendanceData from "../assets/json/attendance.json";

const UserDetails = ({ loggedInUserId }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Find the user that matches the logged-in user ID
    const user = attendanceData.find((user) => user.id === loggedInUserId);
    setLoggedInUser(user);
  }, [loggedInUserId]);

  if (!loggedInUser) {
    return <Typography>Loading user data...</Typography>;
  }

  return (
    <Box sx={{ bgcolor: "rgb(121, 119, 119)", color: "#fff", p: 3, borderRadius: 2, marginTop: 2 }}>
      <Typography variant="h4" gutterBottom>
        Employee Details
      </Typography>
      <Box display="flex" justifyContent="center" mb={2}>
        <Avatar src={loggedInUser.photo || "https://via.placeholder.com/100"} alt={loggedInUser.name} sx={{ width: 100, height: 100 }} />
      </Box>
      <Grid container spacing={2}>
        {[
          { label: "Employee ID", value: loggedInUser.id },
          { label: "Name", value: loggedInUser.name },
          { label: "Department", value: loggedInUser.department },
          { label: "Shift", value: loggedInUser.shift || "N/A" },
          { label: "Phone No.", value: loggedInUser.phone || "N/A" },
          { label: "DOJ", value: loggedInUser.doj || "N/A" },
          { label: "Clock In Time", value: loggedInUser.checkIn || "N/A" },
          { label: "Clock Out Time", value: loggedInUser.checkOut || "N/A" },
          { label: "Overtime", value: loggedInUser.overtime || "N/A" },
          { label: "Task", value: loggedInUser.task || "N/A" },
          { label: "Salary", value: loggedInUser.salary || "N/A" }
        ].map((field, index) => (
          <Grid item xs={6} key={index}>
            <TextField fullWidth label={field.label} variant="outlined" value={field.value} disabled />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserDetails;
