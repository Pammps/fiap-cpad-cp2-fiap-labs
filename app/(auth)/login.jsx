import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { router } from "expo-router";

export default function Login() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [erroGeral, setErroGeral] = useState("");

  const [loading, setLoading] = useState(false);

  const validar = () => {
    let valido = true;

    setErroEmail("");
    setErroSenha("");
    setErroGeral("");

    if (!email) {
      setErroEmail("O e-mail é obrigatório");
      valido = false;
    } else if (!email.includes("@")) {
      setErroEmail("Formato de e-mail inválido");
      valido = false;
    }

    if (!senha) {
      setErroSenha("A senha é obrigatória");
      valido = false;
    } else if (senha.length < 6) {
      setErroSenha("Mínimo de 6 caracteres");
      valido = false;
    }

    return valido;
  };

  const handleLogin = async () => {
    if (!validar()) return;

    setLoading(true);

    const ok = await login(email, senha);

    setLoading(false);

    if (!ok) {
      setErroGeral("E-mail ou senha inválidos");
    } else {
      router.replace("/(tabs)");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#0A0A0A" }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
          
          <Text
            style={{
              fontSize: 28,
              color: "#ED145B",
              fontWeight: "bold",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            LabFIAP
          </Text>

          {/* EMAIL */}
          <Text style={{ color: "#fff" }}>E-mail</Text>
          <TextInput
            placeholder="Digite seu e-mail"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            style={{
              borderWidth: 1,
              borderColor: "#333",
              padding: 12,
              borderRadius: 8,
              marginBottom: 5,
              color: "#fff",
            }}
          />
          {erroEmail ? (
            <Text style={{ color: "red", marginBottom: 10 }}>
              {erroEmail}
            </Text>
          ) : null}

          {/* SENHA */}
          <Text style={{ color: "#fff" }}>Senha</Text>
          <TextInput
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
            style={{
              borderWidth: 1,
              borderColor: "#333",
              padding: 12,
              borderRadius: 8,
              marginBottom: 5,
              color: "#fff",
            }}
          />
          {erroSenha ? (
            <Text style={{ color: "red", marginBottom: 10 }}>
              {erroSenha}
            </Text>
          ) : null}

          {/* ERRO GERAL */}
          {erroGeral ? (
            <Text style={{ color: "red", marginBottom: 10, textAlign: "center" }}>
              {erroGeral}
            </Text>
          ) : null}

          {/* LOADING */}
          {loading && (
            <ActivityIndicator size="large" color="#ED145B" />
          )}

          {/* BOTÃO */}
          <TouchableOpacity
            onPress={handleLogin}
            disabled={loading}
            style={{
              backgroundColor: "#ED145B",
              padding: 15,
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>
              Entrar
            </Text>
          </TouchableOpacity>

          {/* CADASTRO */}
          <TouchableOpacity
            onPress={() => router.push("/cadastro")}
            style={{ marginTop: 15 }}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Não tem conta? Cadastre-se
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}