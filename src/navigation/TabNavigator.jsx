import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TreinoScreen from "../screens/treino";
import EvolucaoScreen from "../screens/evolucao";
import PerfilScreen from "../screens/perfil";
import HomeScreen from "../screens/home";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme"; // <-- importa suas cores do theme.js

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: {
          backgroundColor: COLORS.blue, // Cor de fundo do cabeçalho
        },
        headerTintColor: COLORS.white, // Cor do texto (ex: "Perfil do Aluno")
        tabBarActiveTintColor: COLORS.blue, // Aba ativa azul
        tabBarInactiveTintColor: COLORS.gray2, // Aba inativa cinza
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 0.5,
          borderTopColor: COLORS.gray4,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") iconName = "home";
          else if (route.name === "Treino") iconName = "barbell";
          else if (route.name === "Evolução") iconName = "stats-chart";
          else if (route.name === "Perfil") iconName = "person";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Início" }}
      />

      <Tab.Screen
        name="Treino"
        component={TreinoScreen}
        options={{ title: "Área de Treinos" }}
      />

      <Tab.Screen
        name="Evolução"
        component={EvolucaoScreen}
        options={{ title: "Evolução" }}
      />

      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{ title: "Perfil do Aluno" }}
      />
    </Tab.Navigator>
  );
}
