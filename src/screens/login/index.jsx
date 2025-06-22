import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import styles from "./styles";
import { useAuth } from "../../contexts/AuthContext";

export default function Login({ navigation }) {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useAuth();

  const handleLogin = async () => {
    const success = await login(cpf, senha);
    if (success) {
      navigation.replace("MainTabs");
    } else {
      Alert.alert("Erro", "CPF ou senha inválidos");
    }
  };
  
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo_fundo_transparente.png')} style={styles.logo} />
      <Text style={styles.academyName}>Power Gym</Text>

      <TextInput
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        style={styles.input}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.link}>Ainda não é aluno? Crie sua conta aqui...</Text>
      </TouchableOpacity>
    </View>
  );
}
