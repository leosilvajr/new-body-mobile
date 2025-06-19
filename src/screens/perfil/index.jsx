import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
import styles from './styles';

export default function PerfilScreen({ navigation }) {
  const usuario = {
    nome: 'Leonardo Silva',
    idade: 28,
    email: 'leonardo.silva@email.com',
    objetivo: 'Hipertrofia',
    plano: 'Mensal',
    frequencia: '4x por semana',
    altura: 1.78,
    peso: 82,
  };

  const imc = (usuario.peso / (usuario.altura * usuario.altura)).toFixed(1);

  const handleLogout = () => {
    Alert.alert("Sair", "Deseja realmente sair da sua conta?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Desconectar",
        style: "destructive",
        onPress: () => navigation.replace('Login')
      }
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={require('../../assets/avatar_padrao.png')}
          style={styles.avatar}
        />
        <Text style={styles.nome}>{usuario.nome}</Text>
        <Text style={styles.email}>{usuario.email}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Idade:</Text>
        <Text style={styles.value}>{usuario.idade} anos</Text>

        <Text style={styles.label}>Altura:</Text>
        <Text style={styles.value}>{usuario.altura} m</Text>

        <Text style={styles.label}>Peso:</Text>
        <Text style={styles.value}>{usuario.peso} kg</Text>

        <Text style={styles.label}>Objetivo:</Text>
        <Text style={styles.value}>{usuario.objetivo}</Text>

        <Text style={styles.label}>Plano:</Text>
        <Text style={styles.value}>{usuario.plano}</Text>

        <Text style={styles.label}>Frequência:</Text>
        <Text style={styles.value}>{usuario.frequencia}</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Desconectar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
