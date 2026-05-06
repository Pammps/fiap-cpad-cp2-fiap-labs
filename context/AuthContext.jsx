import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const data = await AsyncStorage.getItem("userLogged");
    if (data) setUser(JSON.parse(data));
  };

  const login = async (email, senha) => {
    const stored = await AsyncStorage.getItem("user");
    const userData = JSON.parse(stored);

    if (userData?.email === email && userData?.senha === senha) {
      setUser(userData);
      await AsyncStorage.setItem("userLogged", JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const register = async (data) => {
    await AsyncStorage.setItem("user", JSON.stringify(data));
  };

  const logout = async () => {
    await AsyncStorage.removeItem("userLogged");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}