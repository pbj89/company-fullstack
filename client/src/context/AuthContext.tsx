import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [isAdmin, setIsAdmin] = useState(false);

  const login = (tk: string, admin: boolean) => {
    localStorage.setItem('token', tk);
    setToken(tk);
    setIsAdmin(admin);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ token, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
