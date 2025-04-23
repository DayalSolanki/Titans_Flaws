import React from 'react'
import { FaBuilding, FaCalendarAlt, FaCogs, FaMoneyBillWave, FaTachometerAlt, FaUsers } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <div className='bg-grey-800 text-black h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64'>
        <div className='bg-teal-600 h-12 flex items-center justify-center'>
            <h3 className='text-2xl text-center'>TitansFlaws</h3>
        </div>
        <div>
            <NavLink to='/admin_dashboard' 
                className={({isActive})=> `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`} end>
                <FaTachometerAlt/>
                <span>Dashboard</span>
            </NavLink>
            <NavLink to='/admin_dashboard/employees' 
                className={({isActive})=> `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`}>
                <FaUsers/>
                <span>Employee</span>
            </NavLink>
            <NavLink to='/admin_dashboard/departments' 
                className={({isActive})=> `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`}>
                <FaBuilding/>
                <span>Department</span>
            </NavLink>
            <NavLink to='/admin_dashboard/leaves' 
                className={({isActive})=> `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`}>
                <FaCalendarAlt/>
                <span>Leave</span>
            </NavLink>            
            <NavLink to='/admin_dashboard/salary/add' 
                className={({isActive})=> `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`}>
                <FaMoneyBillWave/>
                <span>Salary</span>
            </NavLink>
            <NavLink to='/admin_dashboard/setting' 
                className={({isActive})=> `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`}>
                <FaCogs/>
                <span>Settings</span>
            </NavLink>
        </div>
    </div>
  )
}

export default AdminSidebar