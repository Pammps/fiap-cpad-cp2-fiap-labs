import { View, Text, Image, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { AppDataContext } from "../../context/AppDataContext";
import { router } from "expo-router";


export default function Home() {
  const { user } = useContext(AuthContext);
  const { agendamentos } = useContext(AppDataContext);

  const total = agendamentos.length;

  return (
    <View style={{ flex: 1, backgroundColor: "#0A0A0A" }}>
      
      {/* HEADER COM IMAGEM */}
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

        {/* OVERLAY ESCURO */}
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.6)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#ED145B",
              fontSize: 28,
              fontWeight: "bold",
            }}
          >
            FIAP Labs
          </Text>

          <Text style={{ color: "#fff", marginTop: 5 }}>
            Sistema de Agendamentos
          </Text>
        </View>
      </View>

      {/* CONTEÚDO */}
      <View style={{ padding: 20 }}>

        {/* SAUDAÇÃO */}
        <Text style={{ color: "#fff", fontSize: 20 }}>
          Olá, {user?.nome}
        </Text>

        <Text style={{ color: "#999", marginTop: 5 }}>
          Gerencie seus laboratórios de forma rápida
        </Text>

        {/* CARD RESUMO */}
        <View
          style={{
            backgroundColor: "#1A1A1A",
            padding: 20,
            borderRadius: 15,
            marginTop: 20,
          }}
        >
          <Text style={{ color: "#999" }}>Seus agendamentos</Text>

          <Text
            style={{
              color: "#ED145B",
              fontSize: 28,
              fontWeight: "bold",
              marginTop: 5,
            }}
          >
            {total}
          </Text>

          <Text style={{ color: "#999", marginTop: 5 }}>
            Total de reservas realizadas
          </Text>
        </View>

        {/* CARD INFORMAÇÃO */}
        <View
          style={{
            backgroundColor: "#1A1A1A",
            padding: 20,
            borderRadius: 15,
            marginTop: 15,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Como funciona
          </Text>

          <Text style={{ color: "#999", marginTop: 10 }}>
            Escolha um laboratório disponível, selecione a data e confirme
            seu agendamento em poucos segundos.
          </Text>
        </View>

        {/* BOTÃO PRINCIPAL */}
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/criar")}
          style={{
            backgroundColor: "#ED145B",
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