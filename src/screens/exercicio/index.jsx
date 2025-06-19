import React from 'react';
import { View, Text, ScrollView, Button, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function ExercicioScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Tela: Exercício</Text>
      <Text style={styles.subheader}>
        Aqui você poderá explorar funcionalidades específicas para a seção "exercicio"
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Componente de exemplo</Text>
        <TextInput style={styles.input} placeholder="Digite algo..." />
        <Button title="Ação" onPress={() => alert('Você clicou!')} />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Botão customizado</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
