import React, { useEffect, useState } from 'react'
import { fetchDepartments } from '../../utils/EmployeeHelper'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const [departments, setDepartments] = useState([])
    const [formData, setFormData] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        const getDepartments = async() =>{
        const departments = await fetchDepartments()
        setDepartments(departments)
        }
        getDepartments();
    },[])

    const handleChange = (e) =>{
        const {name, value, files} = e.target
        if(name === 'image') {
            setFormData((prevData) => ({...prevData, [name] : files[0]}))
        }else{
            setFormData((prevData) => ({...prevData, [name] : value}))
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        const formDataObj = new FormData()
        Object.keys(formData).forEach((key)=> {
            formDataObj.append(key, formData[key])
        })

        try {
            const response = await axios.post('http://localhost:5000/api/employee/add', formDataObj, {
                headers: {
                    "Authorization" : `Bearer ${localStorage.getItem('token')}`
                }
            })
            if(response.data.success){
                navigate("/admin_dashboard/employees")
            }
        } catch (error) {
            if(error.response && !error.response.data.success) {
                alert(error.response.data.error)
            }
        }
    }

  return (
    <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
        <h2 className='text-2xl font-bold mb-6'> New Employee</h2>
        <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {/* name */}
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Name</label>
                    <input onChange={handleChange} type="text" name='name' placeholder='Insert Name'
                        className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required />
                </div>
                {/* Email */}
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Email</label>
                    <input onChange={handleChange} type="email" name='email' placeholder='Insert Email' 
                     className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required/>
                </div>
                {/* Employee Id */}
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Employee ID</label>
                    <input onChange={handleChange} type="text" name='employeeId' placeholder='Employee ID' 
                     className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required/>
                </div>
                {/* DOB */}
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Date of Birth</label>
                    <input onChange={handleChange} type="date" name='dob' placeholder='DOB' 
                     className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required/>
                </div>
                {/* Gender */}
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Gender</label>
                    <select onChange={handleChange} name='gender' placeholder="Gender"
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>    
                </div>
                {/* Marital Status */}
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Gender</label>
                    <select onChange={handleChange} name='maritalStatus' placeholder="Marital Status"
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required>
                        <option value="">Select Status</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                    </select>    
                </div>                
                {/* Designation */}
                <div>
                <label className='block text-sm font-medium text-gray-700'>Designation</label>
                    <input onChange={handleChange} type="text" name='designation' placeholder='Designation' 
                     className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required/>
                </div>
                {/* Department */}
                <div>
                <label className='block text-sm font-medium text-gray-700'>Department</label>
                    <select onChange={handleChange} name='department'
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required>
                        <option value=''>Select Department</option>
                        {departments.map((dep)=>(
                            <option key={dep._id} value={dep._id}>{dep.dep_name}</option>
                        ))}
                    </select>                        
                </div>
                {/* Salary */}
                <div>
                <label className='block text-sm font-medium text-gray-700'>Salary</label>
                    <input onChange={handleChange} type="number" name='salary' placeholder='Salary' 
                     className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required/>
                </div>
                {/* Password */}
                <div>
                <label className='block text-sm font-medium text-gray-700'>Password</label>
                    <input onChange={handleChange} type="password" name='password' placeholder='***********' 
                     className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required/>
                </div>
                {/* Role */}
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Role</label>
                    <select onChange={handleChange} name='role'
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required>
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="employee">Employee</option>
                    </select>    
                </div>
                {/* Upload Image */}
                <div>
                <label className='block text-sm font-medium text-gray-700'>Upload Image</label>
                    <input onChange={handleChange} type="file" name='image' placeholder='Upload Image' 
                     className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
                </div>
            </div>
            <button type='submit' className='w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md'>
                Add Employee
            </button>
        </form>
    </div>
  )
}

export default Add