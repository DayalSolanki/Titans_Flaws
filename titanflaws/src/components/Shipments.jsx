import React, { useEffect, useState } from "react";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";


const Shipments = () => {
  const [shipments, setShipments] = useState([]);
  const [filteredShipments, setFilteredShipments] = useState([]);
  const [filters, setFilters] = useState({
    status: "All",
    carrier: "All",
    sortBy: "dispatchDate",
  });

  // Fetch Data from JSON
  useEffect(() => {
    fetch("shipment.json") // Adjust path based on project setup
      .then((response) => response.json())
      .then((data) => {
        console.log("Loaded Shipments Data:", data);
        setShipments(data);
        setFilteredShipments(data);
      })
      .catch((error) => console.error("Error loading shipment data:", error));
  }, []);

  // Apply Filters
  const applyFilters = () => {
    let result = shipments;

    if (filters.status !== "All") {
      result = result.filter((s) => s.status === filters.status);
    }
    if (filters.carrier !== "All") {
      result = result.filter((s) => s.carrier === filters.carrier);
    }

    // Sorting
    result = [...result].sort((a, b) =>
      new Date(a[filters.sortBy]) > new Date(b[filters.sortBy]) ? 1 : -1
    );

    setFilteredShipments(result);
  };

  // Reset Filters
  const resetFilters = () => {
    setFilters({ status: "All", carrier: "All", sortBy: "dispatchDate" });
    setFilteredShipments(shipments);
  };

  return (
    <div  style={{marginTop:4, padding: "20px", background: "rgb(56, 56, 56)", color: "#fff" }}>
      <h2>Shipments</h2>

      {/* Filter Section */}
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <h4>Status</h4>
          {["All", "In transit", "Delayed", "Delivered", "Cancelled", "Draft"].map((status) => (
            <Button
              key={status}
              variant={filters.status === status ? "contained" : "outlined"}
              onClick={() => setFilters({ ...filters, status })}
              style={{ margin: "5px" }}
            >
              {status}
            </Button>
          ))}
        </div>

        <div>
          <h4>Carrier</h4>
          {["All", "UPS", "FedEx"].map((carrier) => (
            <Button
              key={carrier}
              variant={filters.carrier === carrier ? "contained" : "outlined"}
              onClick={() => setFilters({ ...filters, carrier })}
              style={{ margin: "5px" }}
            >
              {carrier}
            </Button>
          ))}
        </div>

        <div>
          <h4>Sort By</h4>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters.sortBy === "dispatchDate"}
                  onChange={() => setFilters({ ...filters, sortBy: "dispatchDate" })}
                />
              }
              label="Dispatch Date"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters.sortBy === "expectedDeliveryDate"}
                  onChange={() => setFilters({ ...filters, sortBy: "expectedDeliveryDate" })}
                />
              }
              label="Expected Delivery Date"
            />
          </FormGroup>
        </div>
      </div>

      {/* Buttons */}
      <div style={{ marginTop: "20px" }}>
        <Button variant="contained" color="primary" onClick={applyFilters} style={{ marginRight: "10px" }}>
          Apply
        </Button>
        <Button variant="outlined" color="secondary" onClick={resetFilters}>
          Reset
        </Button>
      </div>

      {/* Shipment Table */}
      <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#444" }}>
            <th>#</th>
            <th>Status</th>
            <th>Carrier</th>
            <th>Tracking Number</th>
            <th>Delivery Address</th>
            <th>Dispatch Date</th>
            <th>Expected Delivery Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredShipments.map((shipment) => (
            <tr key={shipment.id} style={{ borderBottom: "1px solid #555" }}>
              <td>#{shipment.id}</td>
              <td>{shipment.status}</td>
              <td>{shipment.carrier}</td>
              <td>{shipment.trackingNumber}</td>
              <td>{shipment.deliveryAddress}</td>
              <td>{shipment.dispatchDate}</td>
              <td>{shipment.expectedDeliveryDate}</td>
              <td>
                <Button variant="outlined" color="primary" onClick={() => alert(`Viewing details for ${shipment.id}`)}>
                  View Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shipments;
