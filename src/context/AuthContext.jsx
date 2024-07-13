import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: localStorage.getItem('token') || '',
  });

  const login = (user, token) => {
    setAuth({ user, token });
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setAuth({ user: null, token: '' });
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
