import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function ExercicioCard({ titulo, repeticoes, imagem }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imagem }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.repeticoes}>{repeticoes}</Text>
      </View>
    </View>
  );
}
