
import Attendance from './components/Attendance';
import Home from './components/Home';
import Inventory from './components/Inventory';
import LoginPage from './components/Loginpage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shipments from './components/Shipments';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/shipping' element={<Shipments/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/attendance' element={<Attendance/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
