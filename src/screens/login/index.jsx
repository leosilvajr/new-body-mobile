import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import styles from "./styles";

export default function Login({ navigation }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  // const handleLogin = () => {
  //   if (user === "leo" && pass === "123") {
  //     navigation.replace("MainTabs"); // carrega as tabs: Treino, Evolução, Perfil
  //   } else {
  //     Alert.alert("Erro", "Aluno ou senha inválidos");
  //   }
  // };

  const handleLogin = () => {
      navigation.replace("MainTabs"); 
  };
  
  

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo_fundo_transparente.png')} style={styles.logo} />
      <Text style={styles.academyName}>New Body</Text>

      <TextInput
        placeholder="Aluno"
        value={user}
        onChangeText={setUser}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={pass}
        onChangeText={setPass}
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
