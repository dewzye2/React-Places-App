import { createContext } from 'react'
// import React from 'react'

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {}
}); 