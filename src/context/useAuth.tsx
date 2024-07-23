// src/context/useAuth.tsx
import { createContext, useContext, useEffect, useState } from 'react';
import { UserProfile } from '../models/User';
import { useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../services/AuthService';
import { toast } from 'react-toastify';
import axios from 'axios';

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (
    name: string,
    email: string,
    password: string
  ) => Promise<void>;
  loginUser: (email: string, password: string) => Promise<void>;
  logoutUser: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }
    setIsReady(true);
  }, []);

  const registerUser = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      const res = await registerAPI(name, email, password);
      if (res && res.data) {
        localStorage.setItem('token', res.data.token);
        const userObject = {
          name: res.data.name,
          email: res.data.email,
        };
        localStorage.setItem('user', JSON.stringify(userObject));
        setToken(res.data.token);
        setUser(userObject);
        toast.success('Inscription réussie');
        navigate('/');
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      toast.error('Une erreur serveur est survenue');
    }
  };

  const loginUser = async (email: string, password: string): Promise<void> => {
    try {
      const res = await loginAPI(email, password);
      if (res && res.data) {
        localStorage.setItem('token', res.data.token);
        const userObject = {
          name: res.data.name,
          email: res.data.email,
        };
        localStorage.setItem('user', JSON.stringify(userObject));
        setToken(res.data.token);
        setUser(userObject);
        toast.success('Connexion réussie');
        navigate('/');
      } else {
        console.error("Réponse inattendue de l'API", res);
        toast.error('Une erreur serveur est survenue');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      toast.error('Une erreur serveur est survenue');
    }
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        registerUser,
        loginUser,
        logoutUser: logout,
        isLoggedIn,
      }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
