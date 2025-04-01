import React, { useState, useEffect } from "react";
import { Container, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Inventory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [dateFilter, setDateFilter] = useState("All");

  useEffect(() => {
    fetch("http://localhost:5000/api/inventory")
      .then((response) => response.json())
      .then((data) => setFilteredData(data))
      .catch((error) => console.error("Error fetching inventory data:", error));
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    const filtered = filteredData.filter((item) =>
      item.productName.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleDateFilter = (filter) => {
    setDateFilter(filter);
    // Mock filtering based on date (adjust logic as needed)
    if (filter === "Today") {
      setFilteredData(filteredData.slice(0, 2));
    } else if (filter === "This week") {
      setFilteredData(filteredData.slice(0, 4));
    } else {
      fetch("http://localhost:5000/api/inventory")
        .then((response) => response.json())
        .then((data) => setFilteredData(data))
        .catch((error) => console.error("Error fetching inventory data:", error));
    }
  };

  return (
    <Container maxWidth="md" sx={{ bgcolor: "rgb(121, 119, 119)", color: "#fff", p: 3, borderRadius: 2, marginTop:2 }}>
      <Typography variant="h4" gutterBottom>Inventory</Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for products, variants, orders, customers, and more"
        InputProps={{ startAdornment: <SearchIcon /> }}
        value={searchQuery}
        onChange={handleSearch}
        sx={{ mb: 2 }}
      />
      
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Button variant={dateFilter === "Today" ? "contained" : "outlined"} onClick={() => handleDateFilter("Today")}>Today</Button>
        <Button variant={dateFilter === "This week" ? "contained" : "outlined"} onClick={() => handleDateFilter("This week")}>This week</Button>
        <Button variant={dateFilter === "Custom" ? "contained" : "outlined"} onClick={() => handleDateFilter("Custom")}>Custom</Button>
        <Button variant="contained" onClick={() => handleDateFilter("All")} >Refresh Data</Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SKU</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell>Total Value</TableCell>
              <TableCell>Supplier</TableCell>
              <TableCell>Stock Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.sku}>
                <TableCell>{item.sku}</TableCell>
                <TableCell>{item.productName}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>${item.unitPrice}</TableCell>
                <TableCell>${item.totalValue}</TableCell>
                <TableCell>{item.supplier}</TableCell>
                <TableCell>{item.stockStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Inventory;
