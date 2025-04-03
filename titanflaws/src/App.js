import Attendance from './components/Attendance';
import Inventory from './components/Inventory';
import LoginPage from './components/Loginpage';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Shipments from './components/Shipments';
import AdminDashboard from './components/AdminDashboard';
import { ManageWorkers } from './components/ManageWorkers';
import WorkerDashboard from './components/WorkerDashboard';
import Navbar from './common/Navbar';

function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path='/shipping' element={<Shipments />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/' element={<WorkerDashboard />} />
        <Route path='/manage-workers' element={<ManageWorkers />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
