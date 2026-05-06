import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { useContext, useState } from "react";
import { AppDataContext } from "../../context/AppDataContext";
import { ThemeContext } from "../../context/ThemeContext";

const labs = [
  "Lab 1 - Informática",
  "Lab 2 - Redes",
  "Lab 3 - Mobile",
  "Lab 4 - IA",
];

export default function Criar() {
  const { addAgendamento } = useContext(AppDataContext);
  const { theme } = useContext(ThemeContext);

  const [labSelecionado, setLabSelecionado] = useState(null);
  const [data, setData] = useState("");
  const [erro, setErro] = useState("");

  const agendar = () => {
    if (!labSelecionado || !data) {
      setErro("Preencha todos os campos");
      return;
    }

    addAgendamento({ lab: labSelecionado, data });

    setErro("Agendamento realizado com sucesso!");
    setLabSelecionado(null);
    setData("");
  };

  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 60, backgroundColor: theme.background }}>
      <Text style={{ color: theme.text, fontSize: 22, fontWeight: "bold" }}>
        Novo Agendamento
      </Text>

      <Text style={{ color: theme.text, marginBottom: 15 }}>
        Escolha o laboratório e a data
      </Text>

      <Text style={{ color: theme.text }}>Data</Text>

      <TextInput
        placeholder="Ex: 10/06/2026"
        placeholderTextColor={theme.subtext}
        value={data}
        onChangeText={setData}
        style={{
          backgroundColor: theme.card,
          padding: 12,
          borderRadius: 8,
          marginBottom: 15,
          color: theme.text,
        }}
      />

      <FlatList
        data={labs}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setLabSelecionado(item)}
            style={{
              padding: 15,
              marginBottom: 10,
              borderRadius: 10,
              backgroundColor:
                labSelecionado === item ? theme.primary : theme.card,
            }}
          >
            <Text style={{ color: labSelecionado === item ? "#fff" : theme.text, }}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      {erro ? (
        <Text style={{ color: theme.primary, marginBottom: 10 }}>
          {erro}
        </Text>
      ) : null}

      <TouchableOpacity
        onPress={agendar}
        style={{
          backgroundColor: theme.primary,
          padding: 15,
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>
          Confirmar Agendamento
        </Text>
      </TouchableOpacity>
    </View>
  );
}