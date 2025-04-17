import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import EmployeeDashboard from './pages/EmployeeDashboard.jsx'
import PrivateRoutes from './utils/PrivateRoutes.jsx'
import RoleBaseRoutes from './utils/RoleBaseRoutes.jsx'
import AdminDashboardDetails from './components/dashboard/AdminDashboardDetails.jsx'
import Departments from './components/dashboard/Departments.jsx'
import AddDepartment from './components/dashboard/AddDepartment.jsx'
import EditDepartment from './components/dashboard/EditDepartment.jsx'
import List from './components/employees/List.jsx'
import Add from './components/employees/Add.jsx'
import View from './components/employees/View.jsx'
import Edit from './components/employees/Edit.jsx'
import AddSalary from './components/salary/AddSalary.jsx'
import ViewSalary from './components/salary/ViewSalary.jsx'
import EmployeeDetailsCard from './components/EmployeeDashboard/EmployeeDetailsCard.jsx'
import EmpLeaveList from './components/leave/EmpLeaveList.jsx'
import AddLeave from './components/leave/AddLeave.jsx'
import Setting from './components/EmployeeDashboard/Setting.jsx'
import AdminHandleLeave from './components/leave/AdminHandleLeave.jsx'
import EmployeeLeaveDetails from './components/leave/EmployeeLeaveDetails.jsx'

function App() {

  return (
      <div className='text-3xl text-teal-500'>
          <Routes>
            {/* <Route path='/' element={<Navigate to="/admin-dashboard"/>} /> */}
            <Route path='/login' element={<Login/>} />
            <Route path='/admin_dashboard' element={
              <PrivateRoutes>
                <RoleBaseRoutes requiredRole={["admin"]}>
                  <AdminDashboard/>
                </RoleBaseRoutes>
              </PrivateRoutes>
              } >
                <Route index element={<AdminDashboardDetails/>}/>
                <Route path='/admin_dashboard/departments' element={<Departments/>}/>
                <Route path='/admin_dashboard/add_department' element={<AddDepartment/>}/>
                <Route path='/admin_dashboard/department/:id' element={<EditDepartment/>}/>
                <Route path='/admin_dashboard/employees' element={<List/>}/>
                <Route path='/admin_dashboard/add_employees' element={<Add/>}/>
                <Route path='/admin_dashboard/employees/:id' element={<View/>}/>
                <Route path='/admin_dashboard/employees/edit/:id' element={<Edit/>}/>
                <Route path='/admin_dashboard/salary/add' element={<AddSalary/>}/>   
                <Route path='/admin_dashboard/employees/salary/:id' element={<ViewSalary/>}/>
                <Route path='/admin_dashboard/leaves' element={<AdminHandleLeave/>}/>  
                <Route path='/admin_dashboard/leaves/:id' element={<EmployeeLeaveDetails/>}/>
                <Route path='/admin_dashboard/employees/leaves/:id' element={<EmpLeaveList/>}/>
                <Route path='/admin_dashboard/setting' element={<Setting/>}/>                
            </Route>    
            <Route path='/employee_dashboard' element={
              <PrivateRoutes>
                <RoleBaseRoutes requiredRole={["admin", "employee"]}>
                  <EmployeeDashboard/>
                </RoleBaseRoutes>
              </PrivateRoutes>
              } >
                <Route index element={<EmployeeDetailsCard/>}/>
                <Route path='/employee_dashboard/profile/:id' element={<View/>}/>
                <Route path='/employee_dashboard/leaves/:id' element={<EmpLeaveList/>}/>
                <Route path='/employee_dashboard/add-leave' element={<AddLeave/>}/>
                <Route path='/employee_dashboard/salary/:id' element={<ViewSalary/>}/>
                <Route path='/employee_dashboard/setting' element={<Setting/>}/>
            </Route>    
          </Routes>
      </div>  
  )
}

export default App
