import React, {useContext, useEffect, useState} from "react";
import {ACCESS_TOKEN, API_BASE_URL} from "../constants";
import {useHttp} from "../hooks/http.hook";

const AuthContext = React.createContext({})

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
  const [accessToken, setAccessToken] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  const {request} = useHttp()

  const login = (loginRequest) => {
    return request({
      url: `${API_BASE_URL}/auth/login`,
      method: 'POST',
      body: JSON.stringify(loginRequest)
    })
  }

  const signUp = (signUpRequest) => {
    return request({
      url: `${API_BASE_URL}/auth/signup`,
      method: 'POST',
      body: JSON.stringify(signUpRequest)
    })
  }

  const logout = () => {
    request({
      url: `${API_BASE_URL}/auth/logout`,
      method: 'POST'
    }).catch(() => {
      localStorage.removeItem(ACCESS_TOKEN)
      setAccessToken(null)
    }).finally(() => {
      localStorage.removeItem(ACCESS_TOKEN)
      setAccessToken(null)
      setCurrentUser(null)
    })
  }

  // const getCurrentUser = (token) => {
  // }

  //get user at CRA loaded
  useEffect(() => {
    console.log('####useEffect call####')
    const token = localStorage.getItem(ACCESS_TOKEN)
    if (token) {
      setAccessToken(token)
    }
  })

  useEffect(() => {
    console.log('getMe call')
    if (accessToken) {
      request({
        url: `${API_BASE_URL}/auth/me`,
        method: 'GET'
      }).then(res => setCurrentUser(res))
    }
  }, [accessToken])

  return (
    <AuthContext.Provider value={{accessToken, currentUser, login, signUp, logout}}>
      {children}
    </AuthContext.Provider>
  )
}