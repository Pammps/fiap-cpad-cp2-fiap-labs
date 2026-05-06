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
        backgroundColor: theme.backgroundColor,
      }}
    >
      <Text
        style={{ color: theme.textColor, fontSize: 22, fontWeight: "bold" }}
      >
        Meus Agendamentos
      </Text>

      <Text style={{ color: theme.textColor, marginBottom: 15 }}>
        Veja e gerencie suas reservas
      </Text>

      <FlatList
        data={agendamentos}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          <Text style={{ color: theme.textColor }}>
            Nenhum agendamento encontrado
          </Text>
        }
        renderItem={({ item, index }) => (
          <View
            style={{
              backgroundColor: theme.cardBackgroundColor,
              padding: 15,
              borderRadius: 12,
              marginBottom: 10,
            }}
          >
            <Text style={{ color: theme.textColor, fontWeight: "bold" }}>
              {item.lab}
            </Text>

            <Text style={{ color: theme.textColor, marginTop: 5 }}>
              📅 {item.data}
            </Text>

            <TouchableOpacity
              onPress={() => removeAgendamento(index)}
              style={{
                marginTop: 10,
                backgroundColor: theme.buttonBackgroundColor,
                padding: 8,
                borderRadius: 8,
              }}
            >
              <Text
                style={{ color: theme.buttonTextColor, textAlign: "center" }}
              >
                Excluir
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
