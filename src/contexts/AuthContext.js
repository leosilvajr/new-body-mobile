import React, { createContext, useContext, useState, useEffect } from "react";
import { ROUTES } from "../constants/apiRoutes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

  const login = async (cpf, senha) => {
    try {
      const response = await axios.post(`${ROUTES.LOGIN}`, { cpf, senha });
      const auth = response.data;
  
      setAuthData(auth);
      await AsyncStorage.setItem("authData", JSON.stringify(auth));
  
      return true; // <- necessário para o handleLogin saber que deu certo
    } catch (err) {
      console.error("Erro no login:", err.response?.data || err.message);
      return false;
    }
  };
  

  const logout = async () => {
    try {
      await axios.post(ROUTES.REVOKE); // novo endpoint
    } catch (err) {
      console.warn("Erro ao revogar token:", err);
    }
    await AsyncStorage.removeItem("@authData");
    setAuthData(null);
  };

  const loadAuthData = async () => {
    const data = await AsyncStorage.getItem("@authData");
    if (data) setAuthData(JSON.parse(data));
  };

  useEffect(() => {
    loadAuthData();
  }, []);

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
