import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const panNumber = localStorage.getItem('panNumber');
    const email = localStorage.getItem('email');
    const id = localStorage.getItem('id'); 
    return { token, role, panNumber, email, id};
  });

  const login = ({ token, role, panNumber, email, id }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('panNumber', panNumber);
    localStorage.setItem('email', email);
    localStorage.setItem('id', id); 
    setAuth({ token, role, panNumber, email, id });
  };

  const logout = () => {
    localStorage.clear();
    setAuth({ token: null, role: null, panNumber: null, email: null ,id:null});
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
