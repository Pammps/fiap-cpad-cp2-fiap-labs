import { View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Perfil() {
  const { user, logout } = useContext(AuthContext);
  const { toggleTheme, theme } = useContext(ThemeContext);

  const handleLogout = async () => {
    await logout();
    router.replace("/login");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
        padding: 20,
      }}
    >
      {/* HEADER */}
      <View style={{ alignItems: "center", marginTop: 40 }}>
        <Ionicons name="person-circle" size={100} color="#ED145B" />

        <Text
          style={{
            color: theme.text,
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          {user?.nome}
        </Text>

        <Text style={{ color: "#999" }}>{user?.email}</Text>
      </View>

      {/* CARD INFO */}
      <View
        style={{
          marginTop: 40,
          backgroundColor: "#1A1A1A",
          borderRadius: 12,
          padding: 20,
        }}
      >
        <Text style={{ color: "#999", marginBottom: 5 }}>
          Nome completo
        </Text>
        <Text style={{ color: "#fff", marginBottom: 15 }}>
          {user?.nome}
        </Text>

        <Text style={{ color: "#999", marginBottom: 5 }}>
          E-mail
        </Text>
        <Text style={{ color: "#fff" }}>
          {user?.email}
        </Text>
      </View>

      {/*BOTÃO THEME */}
      <TouchableOpacity
        onPress={toggleTheme}
        style={{
         marginTop: 15,
         backgroundColor: "#1A1A1A",
            padding: 15,
           borderRadius: 10,
        }}
    >
        <Text style={{ color: "#fff", textAlign: "center" }}>
            Alternar para {theme.dark ? "Tema Claro" : "Tema Escuro"}  
        </Text>
    </TouchableOpacity>

      {/* BOTÃO SAIR */}
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          marginTop: 40,
          backgroundColor: "#ED145B",
          padding: 15,
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="log-out" size={18} color="#fff" />

        <Text
          style={{
            color: "#fff",
            marginLeft: 8,
            fontWeight: "bold",
          }}
        >
          Sair da conta
        </Text>
      </TouchableOpacity>
    </View>
  );
}