import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';

export default function TreinoScreen() {
  const [treinoConcluido, setTreinoConcluido] = useState(false);

  const exercicios = [
    { nome: 'Supino Reto', series: '4x10' },
    { nome: 'Supino Inclinado', series: '3x12' },
    { nome: 'Crossover', series: '3x15' },
    { nome: 'Tríceps Testa', series: '4x10' },
    { nome: 'Tríceps Pulley', series: '3x12' },
  ];

  const concluirTreino = () => {
    setTreinoConcluido(true);
    Alert.alert('Parabéns!', 'Você concluiu o treino de hoje 💪');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.nomePlano}>Treino ABC - Foco em Hipertrofia</Text>
      <Text style={styles.treinoHoje}>Hoje: Treino B - Peito e Tríceps</Text>

      <View style={styles.listaExercicios}>
        {exercicios.map((ex, index) => (
          <View key={index} style={styles.exercicio}>
            <Text style={styles.nomeExercicio}>{ex.nome}</Text>
            <Text style={styles.series}>{ex.series}</Text>
          </View>
        ))}
      </View>

      {!treinoConcluido ? (
        <TouchableOpacity style={styles.botaoFinalizar} onPress={concluirTreino}>
          <Text style={styles.textoBotao}>Concluir Treino</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.mensagemConcluido}>✅ Treino concluído!</Text>
      )}
    </ScrollView>
  );
}
