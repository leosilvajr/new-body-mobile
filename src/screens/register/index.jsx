import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import styles from "./styles";

export default function Register({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }
    Alert.alert("Sucesso", "Conta criada (simulado).");
    navigation.replace("Home");
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo_fundo_transparente.png')} style={styles.logo} />
      <Text style={styles.academyName}>New Body</Text>

      <TextInput
        placeholder="Nome completo"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <TextInput
        placeholder="Confirme a senha"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
      />

      <TouchableOpacity onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Voltar para login</Text>
      </TouchableOpacity>
    </View>
  );
}
