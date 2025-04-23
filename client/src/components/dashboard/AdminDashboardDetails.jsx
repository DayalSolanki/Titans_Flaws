import React, { useEffect, useState } from 'react'
import DetailsCard from './DetailsCard'
import { FaBuilding, FaCheckCircle, FaFileAlt, FaHourglassHalf, FaMoneyBillWave, FaTimesCircle, FaUsers } from 'react-icons/fa'
import axios from 'axios'

const AdminDashboardDetails = () => {
  const [detail, setDetail] = useState(null)

  useEffect(() =>{
    const fetchDetails = async() => {
      try {
        const detail = await axios.get('http://localhost:5000/api/dashboard/summary', {
          headers : {
            "Authorization" : `Bearer ${localStorage.getItem('token')}`
          }
        })
        setDetail(detail.data.data)
      } catch (error) {
        if(error.response){
          alert(error.response.data.error)
        }
      }
    }
    fetchDetails();
  }, [])

  if (!detail || !detail.leaveSummary) {
    return <div>Loading...</div>;
  }
  

  return (
    <div className='p-6'>
        <h3 className='text-2xl font-bold'>Dashboard Overview</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
            <DetailsCard icon={<FaUsers/>} text="Total Employees" number={detail.totalEmployees} color="bg-teal-600"/>
            <DetailsCard icon={<FaBuilding/>} text="Total Departments" number={detail.totalDepartments} color="bg-yellow-600"/>
            <DetailsCard icon={<FaMoneyBillWave/>} text="Monthly Salary" number={detail.totalSalary} color="bg-red-600"/>
        </div>

        <div className='mt-12'>
            <h4 className='text-center text-2xl font-bold'>Leave Details</h4>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
            <DetailsCard icon={<FaFileAlt/>} text="Leave Applied" number={detail?.leaveSummary?.appliedFor} color="bg-teal-600"/>
            <DetailsCard icon={<FaCheckCircle/>} text="Leave Approved" number={detail?.leaveSummary?.approved} color="bg-green-600"/>
            <DetailsCard icon={<FaHourglassHalf/>} text="Leave Pending" number={detail?.leaveSummary?.pending} color="bg-yellow-600"/>
            <DetailsCard icon={<FaTimesCircle/>} text="Leave Rejected" number={detail?.leaveSummary?.rejected} color="bg-red-600"/>
            </div>
        </div>
    </div>
  )
}

export default AdminDashboardDetails