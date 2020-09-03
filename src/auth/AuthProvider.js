import React, { useReducer, useContext, createContext } from 'react'
import { reducer, initialState } from './index'

const AuthContext = createContext()

function AuthProvider({ children }) {
  const [state, control] = useReducer(reducer, initialState)

  return (
    <AuthContext.Provider value={{ state, control }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext) || {}

export { AuthProvider, useAuth }
