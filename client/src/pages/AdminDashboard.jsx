import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Outlet, useNavigate } from 'react-router-dom'
import AdminSidebar from '../components/dashboard/AdminSidebar'
import Navbar from '../components/dashboard/Navbar'

const AdminDashboard = () => {
  const {user, loading} = useAuth()
  const navigate = useNavigate()

  return (
    <div>
      <AdminSidebar/>
      <div className='flex-1 ml-64 bg-gray-100 h-screen'>
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminDashboard