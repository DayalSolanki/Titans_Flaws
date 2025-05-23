import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await axios.get('http://localhost:5000/api/auth/verify', {
            headers: {
              Authorization : `Bearer ${token}`
            }
          });
          if (response.data.success) {
            setUser(response.data.user);
          }
        } else {
          setUser(null)
          setLoading(false)
        }
      } catch (error) {
        if(error.response && !error.response.data.error) {
            setUser(null)
        }
      } finally {
            setLoading(false)
      }
    };
    verifyUser();
  }, [navigate]);

  const login = (user) => setUser(user);
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
