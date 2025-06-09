import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import styles from "./styles";
import { COLORS } from "../../constants/theme";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo_fundo_transparente.png")}
        style={styles.logo}
      />
      <Text style={styles.academyName}>New Body</Text>
      <Text style={styles.welcome}>Bem-vindo ao seu novo corpo!</Text>
      <Text style={styles.slogan}>
        Treine com propósito, evolua com resultado. 💪
      </Text>

      <TouchableOpacity
        onPress={() => navigation.replace("Login")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
