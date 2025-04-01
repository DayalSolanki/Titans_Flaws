import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, TextField, Button, Typography, List, ListItem, Paper } from "@mui/material";

function ManageWorkers() {
    const [workers, setWorkers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [payment, setPayment] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [shift, setShift] = useState("");

    useEffect(() => {
        const fetchWorkers = async () => {
            const token = localStorage.getItem("token");
            const config = { headers: { Authorization: `Bearer ${token}` } };
            const res = await axios.get("http://localhost:5000/api/workers", config);
            setWorkers(res.data);
        };
        fetchWorkers();
    }, []);

    const handleRegister = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        const config = { headers: { Authorization: `Bearer ${token}` } };
        await axios.post("http://localhost:5000/api/register", { name, email, password, role, payment, age, address, contact, shift }, config);
        window.location.reload();
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: "20px" }}>
            <Typography variant="h4" gutterBottom>Manage Workers</Typography>
            <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <TextField label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} required />
                <TextField label="Email" type="email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <TextField label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <TextField label="Role" variant="outlined" value={role} onChange={(e) => setRole(e.target.value)} required />
                <TextField label="Payment" type="number" variant="outlined" value={payment} onChange={(e) => setPayment(e.target.value)} required />
                <TextField label="Age" type="number" variant="outlined" value={age} onChange={(e) => setAge(e.target.value)} required />
                <TextField label="Address" variant="outlined" value={address} onChange={(e) => setAddress(e.target.value)} required />
                <TextField label="Contact Number" type="tel" variant="outlined" value={contact} onChange={(e) => setContact(e.target.value)} required />
                <TextField label="Shift" variant="outlined" value={shift} onChange={(e) => setShift(e.target.value)} />
                <Button type="submit" variant="contained" color="primary">Register</Button>
            </form>
            <Paper style={{ marginTop: "20px", padding: "10px" }}>
                <List>
                    {workers.map((worker) => (
                        <ListItem key={worker.id}>{worker.name} - {worker.email} - {worker.role} - {worker.payment} - {worker.age} - {worker.address} - {worker.contact} - {worker.shift}</ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
}

export { ManageWorkers };