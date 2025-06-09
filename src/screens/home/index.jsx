import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/theme";

export default function Home({ navigation }) {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLORS.blue
    }}>
      <Text style={{ color: COLORS.white, fontSize: 24, marginBottom: 30 }}>Bem-vindo à New Body!</Text>
      <TouchableOpacity onPress={() => navigation.replace("Login")} style={{
        backgroundColor: COLORS.red,
        padding: 15,
        borderRadius: 10,
      }}>
        <Text style={{ color: COLORS.white, fontWeight: "bold" }}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
