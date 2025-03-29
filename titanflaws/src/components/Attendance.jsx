import React from "react";
import { Container, TextField, Grid, Button, Typography, Box } from "@mui/material";

const Attendance = () => {
  return (
    <Container maxWidth="md"  sx={{ bgcolor: "rgb(121, 119, 119)", color: "#fff", p: 3, borderRadius: 2, marginTop:2 }}>
      <Typography variant="h5" gutterBottom>
        Attendance Detail
      </Typography>
      <Box sx={{ borderBottom: "1px solid rgb(216, 216, 216)", mb: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={6}><TextField fullWidth label="Employee ID" variant="outlined" /></Grid>
        <Grid item xs={6}><TextField fullWidth label="Name" variant="outlined" /></Grid>
        <Grid item xs={6}><TextField fullWidth label="Department" variant="outlined" /></Grid>
        <Grid item xs={6}><TextField fullWidth label="Shift" variant="outlined" /></Grid>
        <Grid item xs={6}><TextField fullWidth label="Phone No." variant="outlined" /></Grid>
        <Grid item xs={6}><TextField fullWidth label="DOJ" variant="outlined" /></Grid>
        <Grid item xs={4}><TextField fullWidth label="Clock In Time" variant="outlined" /></Grid>
        <Grid item xs={4}><TextField fullWidth label="Clock Out Time" variant="outlined" /></Grid>
        <Grid item xs={4}><TextField fullWidth label="Overtime" variant="outlined" /></Grid>
      </Grid>
      <Box mt={2} display="flex" gap={2}>
        <Button variant="contained" color="primary">Date Wise</Button>
        <Button variant="contained" color="secondary">Department Wise</Button>
        <Button variant="contained" color="success">Status Wise</Button>
      </Box>
      
      <Typography variant="h6" mt={4}>Date Wise Attendance</Typography>
      <Typography variant="body2">Date Format (DD/MM/YYYY):</Typography>
      <Box display="flex" gap={2} mt={1}>
        <TextField label="From" variant="filled" fullWidth />
        <TextField label="To" variant="filled" fullWidth />
        <Button variant="contained" color="info">Show</Button>
      </Box>
    </Container>
  );
};

export default Attendance;
