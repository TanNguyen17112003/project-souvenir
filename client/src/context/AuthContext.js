
import { React, createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
}
export const AuthProvider = ({children}) => {
  const navigate = useNavigate();
  const register = async (email, pwd) => {
    
    try {
      await axios.post("http://localhost:3400/signup", {email, pwd})
      .then((res) => {
        if (res.status === 200) {
          navigate("/login");
          window.location.reload();
        }
      })
      .catch((e) => {
        console.log(e)
      })
    } catch (e) {
      console.log(e)
    }
  }

  const login = async (email, pwd) => {
    try {
      await axios.post("http://localhost:3400/login", {email, pwd})
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('userEmail', email);
          navigate("/");
          window.location.reload();
        }
      })
      .catch((e) => {
        console.error(e.message);
      })
    }
    catch (e) {
      console.log(e);
    }
  }

  const logout = () => {
    localStorage.removeItem("userEmail");
  }
  const value = {
    login,
    register,
    logout,
  }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

