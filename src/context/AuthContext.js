import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const id = localStorage.getItem('id'); 
    return { token, role, name, email, id};
  });

  const login = ({ token, role, name, email, id }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('id', id); 
    setAuth({ token, role, name, email, id });
  };

  const logout = () => {
    localStorage.clear();
    setAuth({ token: null, role: null, name: null, email: null ,id:null});
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
