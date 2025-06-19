import React from 'react';
import { View, Text, ScrollView, Button, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function CadastroScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Tela: Cadastro</Text>
      <Text style={styles.subheader}>
        Aqui você poderá explorar funcionalidades específicas para a seção "cadastro"
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
