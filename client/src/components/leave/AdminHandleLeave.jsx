import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { columns } from '../../utils/LeaveHelper'
import axios from 'axios'

const AdminHandleLeave = () => {
    const [leaves, setLeaves] = useState(null)
    const [filteredLeaves, setFilteredLeaves] = useState(null)

    const fetchLeaves = async() =>{
        setEmpLoading(true)
      try {
        const response = await axios.get('http://localhost:5000/api/leaves',{
          headers: {
            "Authorization" : `Bearer ${localStorage.getItem('token')}`
          }
        })
        if(response.data.success) {
          let sno = 1; 
          const data = await response.data.leaves.map((leave)=> (
            {
              _id: leave._id,
              sno: sno++,
              employeeId: leave.employeeId.employeeId,
              name: leave.employeeId.userId.name,
              leaveType: leave.leaveType,
              department: leave.employeeId.department.dep_name,
              days: new Date(leave.endDate).getDate() - new Date(leave.startDate).getDate(),
              status: leave.status,
              action: (<LeaveButtons Id={leave._id}/>)
            }
           ))
           setLeaves(data)
        }
      } catch (error) {
        if(error.response && !error.response.data.success) {
          alert(error.response.data.error)
        }
      }
    }

    useEffect(()=>{
        fetchLeaves();
    }, [])

    const filterByInput = (e) =>{
        const data = leaves.filter((leave) => leave.employeeId.toLowerCase().includes(e.target.value.toLowerCase()))
      setFilteredLeaves(data)  
    }

    const filterByButton = (status) =>{
        const data = leaves.filter((leave) => leave.status.toLowerCase().includes(status.toLowerCase()))
      setFilteredLeaves(data)  
    }

  return (
    <> {filteredLeaves ? (
        <div className='p-6'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold' >Manage Leaves</h3>
            </div>
            <div className='flex justify-between items-center'>
                <input onChange={filterByInput} type='text' placeholder='search' className='px-4 py-0.5 border'/>
                <div className='space-x-3'>
                    <button onClick={()=> filterByButton('Pending')} className='px-2 py-1 bg-yellow-600 text-white hover:bg-yellow-800'>
                        Pending
                    </button>
                    <button onClick={()=> filterByButton('Approved')} className='px-2 py-1 bg-green-600 text-white hover:bg-green-800'> 
                        Approved 
                    </button>
                    <button onClick={()=> filterByButton('Rejected')} className='px-2 py-1 bg-red-600 text-white hover:bg-red-800'>
                        Rejected 
                    </button>
                </div>
            </div>
            <div className='mt-4'>
                <DataTable columns={columns} data={filteredLeaves} pagination />
            </div>
        </div>
        ) : <div>Loading ...</div>}
    </>    
  )
}

export default AdminHandleLeave