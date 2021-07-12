import React, {useContext, useEffect, useState} from "react";
import {ACCESS_TOKEN, API_BASE_URL} from "../constants";
import {useHttp} from "../hooks/http.hook";

const AuthContext = React.createContext({})

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)
  const {request} = useHttp()

  const login = (loginRequest) => {
    return request({
      url: `${API_BASE_URL}/auth/signin`,
      method: 'POST',
      body: JSON.stringify(loginRequest)
    })
  }

  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN)
    setCurrentUser(null)
  }

  const getCurrentUser = (token) => {
  }

  //get user at CRA loaded
  useEffect(() => {
    console.log('####useEffect call####')
    const token = localStorage.getItem(ACCESS_TOKEN)
    if (token) {
      setCurrentUser(token)
    }
  },)

  return (
    <AuthContext.Provider value={{currentUser, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}