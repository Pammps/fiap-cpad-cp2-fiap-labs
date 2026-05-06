import { useContext } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { AppDataContext } from "../../context/AppDataContext";
import { ThemeContext } from "../../context/ThemeContext";

export default function Agendamentos() {
  const { theme } = useContext(ThemeContext);
  const { agendamentos, removeAgendamento } = useContext(AppDataContext);

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        paddingTop: 60,
        backgroundColor: theme.background,
      }}
    >
      <Text style={{ color: theme.text, fontSize: 22, fontWeight: "bold" }}>
        Meus Agendamentos
      </Text>

      <Text style={{ color: theme.text, marginBottom: 15 }}>
        Veja e gerencie suas reservas
      </Text>

      <FlatList
        data={agendamentos}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          <Text style={{ color: theme.text }}>
            Nenhum agendamento encontrado
          </Text>
        }
        renderItem={({ item, index }) => (
          <View
            style={{
              backgroundColor: theme.card,
              padding: 15,
              borderRadius: 12,
              marginBottom: 10,
            }}
          >
            <Text style={{ color: theme.text, fontWeight: "bold" }}>
              {item.lab}
            </Text>

            <Text style={{ color: theme.text, marginTop: 5 }}>
              📅 {item.data}
            </Text>

            <TouchableOpacity
              onPress={() => removeAgendamento(index)}
              style={{
                marginTop: 10,
                backgroundColor: theme.primary,
                padding: 8,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>
                Excluir
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}