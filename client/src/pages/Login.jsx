import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const {login} = useAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {email, password});
            if(response.data.success){
                if(response.data.success){
                    login(response.data.user)
                    localStorage.setItem("token", response.data.token)
                    if(response.data.user.role === "admin") {
                        navigate('/admin_dashboard')
                    }else{
                        navigate('/employee_dashboard')
                    }
                }
            }
        } catch (error) {
            if(error.response && !error.response.data.success){
                setError(error.response.data.error)
            }else{
                setError("Server Error")
            }
        }
    }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center text-sm text-gray-600 bg-black/50">
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
            <p className="text-2xl font-medium m-auto">
                <span className="text-indigo-500">Login</span>
            </p>
            {error && ( <div className="bg-red-100 text-red-700 px-4 py-2 rounded w-full text-sm">
                {error}
                </div> )
            }    
            
            <div className="w-full ">
                <p>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type here" 
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="email" required />
            </div>
            <div className="w-full ">
                <p>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" 
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="password" required />
            </div>
            
            <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
                {"Login"}
            </button>
        </form>

    </div>
  )
}

export default Login