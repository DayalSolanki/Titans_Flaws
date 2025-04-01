import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, TextField, InputAdornment, Drawer, List, ListItem, ListItemText, Avatar } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    { text: "My profile", path: "/MyProfile" },
    { text: "Settings", path: "/settings" },
    { text: "Any Query", path: "/contact" },
  ];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#0a2540" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Left: Logo & Home */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton color="inherit">
              <img src="/logo.png" alt="Logo" style={{ width: 40, height: 40 }} />
            </IconButton>
          </Box>

          {/* Center: Search Bar */}
          <TextField
            variant="outlined"
            placeholder="Search..."
            sx={{
              width: "40%",
              backgroundColor: "#ddd",
              borderRadius: 2,
              input: { padding: "8px 10px" },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Right: Menu Icon */}
          <IconButton color="inherit" onClick={() => setMenuOpen(true)}>
            <Avatar src="/path-to-avatar.jpg" alt="User Avatar" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sliding Menu */}
      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
      <Box sx={{ width: 250, backgroundColor: "#0a2540", height: "100vh", color: "white", padding: 2 }}>
        <List>
          {menuItems.map(({ text, path }) => (
            <ListItem button key={text} component={NavLink} to={path} sx={{ textDecoration: "none" }}>
              <ListItemText primary={text} sx={{ color: "white" }} />
            </ListItem>
          ))}

        </List>
        <Typography variant="body2">titanflaws365@gmail.com</Typography>
      </Box>
    </Drawer>
    </>
  );
};

export default Navbar;
