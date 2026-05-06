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

export default function Cadastro() {
  const { register } = useContext(AuthContext);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const [erroNome, setErroNome] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [erroConfirmar, setErroConfirmar] = useState("");

  const [loading, setLoading] = useState(false);

  const validar = () => {
    let valido = true;

    setErroNome("");
    setErroEmail("");
    setErroSenha("");
    setErroConfirmar("");

    if (!nome) {
      setErroNome("O nome é obrigatório");
      valido = false;
    }

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

    if (!confirmar) {
      setErroConfirmar("Confirme a senha");
      valido = false;
    } else if (senha !== confirmar) {
      setErroConfirmar("As senhas não coincidem");
      valido = false;
    }

    return valido;
  };

  const handleCadastro = async () => {
    if (!validar()) return;

    setLoading(true);

    await register({ nome, email, senha });

    setLoading(false);

    router.replace("/login");
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
            Cadastro
          </Text>

          {/* NOME */}
          <Text style={{ color: "#fff" }}>Nome completo</Text>
          <TextInput
            placeholder="Digite seu nome"
            placeholderTextColor="#999"
            value={nome}
            onChangeText={setNome}
            style={{
              borderWidth: 1,
              borderColor: "#333",
              padding: 12,
              borderRadius: 8,
              marginBottom: 5,
              color: "#fff",
            }}
          />
          {erroNome ? (
            <Text style={{ color: "red", marginBottom: 10 }}>
              {erroNome}
            </Text>
          ) : null}

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

          {/* CONFIRMAR SENHA */}
          <Text style={{ color: "#fff" }}>Confirmar senha</Text>
          <TextInput
            placeholder="Confirme sua senha"
            placeholderTextColor="#999"
            secureTextEntry
            value={confirmar}
            onChangeText={setConfirmar}
            style={{
              borderWidth: 1,
              borderColor: "#333",
              padding: 12,
              borderRadius: 8,
              marginBottom: 5,
              color: "#fff",
            }}
          />
          {erroConfirmar ? (
            <Text style={{ color: "red", marginBottom: 10 }}>
              {erroConfirmar}
            </Text>
          ) : null}

          {/* LOADING */}
          {loading && (
            <ActivityIndicator size="large" color="#ED145B" />
          )}

          {/* BOTÃO */}
          <TouchableOpacity
            onPress={handleCadastro}
            disabled={loading}
            style={{
              backgroundColor: "#ED145B",
              padding: 15,
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>
              Cadastrar
            </Text>
          </TouchableOpacity>

          {/* VOLTAR LOGIN */}
          <TouchableOpacity
            onPress={() => router.push("/login")}
            style={{ marginTop: 15 }}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Já tem conta? Faça login
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}