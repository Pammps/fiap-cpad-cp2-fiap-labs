import { View, Text, Image, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { AppDataContext } from "../../context/AppDataContext";
import { ThemeContext } from "../../context/ThemeContext";
import { router } from "expo-router";

export default function Home() {
  const { user } = useContext(AuthContext);
  const { agendamentos } = useContext(AppDataContext);
  const { theme } = useContext(ThemeContext);

  const total = agendamentos.length;

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      
      <View
        style={{
          height: 220,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          overflow: "hidden",
        }}
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1581090700227-1e8b3b1f2c0f",
          }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />

        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.6)", // mantém overlay
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: theme.primary, fontSize: 28, fontWeight: "bold" }}>
            FIAP Labs
          </Text>

          <Text style={{ color: "#fff", marginTop: 5 }}>
            Sistema de Agendamentos
          </Text>
        </View>
      </View>

      <View style={{ padding: 20 }}>

        <Text style={{ color: theme.text, fontSize: 20 }}>
          Olá, {user?.nome}
        </Text>

        <Text style={{ color: theme.subtext, marginTop: 5 }}>
          Gerencie seus laboratórios de forma rápida
        </Text>

        <View
          style={{
            backgroundColor: theme.card,
            padding: 20,
            borderRadius: 15,
            marginTop: 20,
          }}
        >
          <Text style={{ color: theme.subtext }}>Seus agendamentos</Text>

          <Text
            style={{
              color: theme.primary,
              fontSize: 28,
              fontWeight: "bold",
              marginTop: 5,
            }}
          >
            {total}
          </Text>

          <Text style={{ color: theme.subtext, marginTop: 5 }}>
            Total de reservas realizadas
          </Text>
        </View>

        <View
          style={{
            backgroundColor: theme.card,
            padding: 20,
            borderRadius: 15,
            marginTop: 15,
          }}
        >
          <Text style={{ color: theme.text, fontWeight: "bold" }}>
            Como funciona
          </Text>

          <Text style={{ color: theme.subtext, marginTop: 10 }}>
            Escolha um laboratório disponível, selecione a data e confirme
            seu agendamento em poucos segundos.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => router.push("/(tabs)/criar")}
          style={{
            backgroundColor: theme.primary,
            padding: 15,
            borderRadius: 12,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            + Novo Agendamento
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}