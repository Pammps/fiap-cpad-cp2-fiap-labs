import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppDataContext = createContext();

export function AppDataProvider({ children }) {
  const [agendamentos, setAgendamentos] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔄 Carregar dados ao iniciar
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const data = await AsyncStorage.getItem("agendamentos");

      if (data) {
        setAgendamentos(JSON.parse(data));
      }
    } catch (error) {
      console.log("Erro ao carregar agendamentos:", error);
    } finally {
      setLoading(false);
    }
  };

  // 💾 Salvar dados
  const saveData = async (data) => {
    try {
      setAgendamentos(data);
      await AsyncStorage.setItem("agendamentos", JSON.stringify(data));
    } catch (error) {
      console.log("Erro ao salvar agendamentos:", error);
    }
  };

  // ➕ Adicionar agendamento
  const addAgendamento = (novo) => {
    const updated = [...agendamentos, novo];
    saveData(updated);
  };

  // ❌ Remover agendamento
  const removeAgendamento = (index) => {
    if (index < 0) return;

    const updated = agendamentos.filter((_, i) => i !== index);
    saveData(updated);
  };

  return (
    <AppDataContext.Provider
      value={{
        agendamentos,
        addAgendamento,
        removeAgendamento,
        loading, // útil pra mostrar spinner se quiser
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
}