import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';

export default function EvolucaoScreen() {
  const medidas = [
    { parte: 'Peitoral', valor: '102 cm' },
    { parte: 'Braço Direito', valor: '37 cm' },
    { parte: 'Braço Esquerdo', valor: '36,5 cm' },
    { parte: 'Cintura', valor: '82 cm' },
    { parte: 'Coxa Direita', valor: '58 cm' },
    { parte: 'Coxa Esquerda', valor: '57 cm' },
  ];

  const enviarAtualizacao = () => {
    Alert.alert('Atualização', 'Funcionalidade de envio em desenvolvimento 🚧');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Evolução Corporal</Text>
      <Text style={styles.dataAtualizacao}>Atualizado em 15/06/2025</Text>

      <View style={styles.graficoPeso}>
        <Text style={styles.pesoAtual}>Peso Atual: 82kg</Text>
        <Text style={styles.pesoAnterior}>Peso Inicial: 78kg</Text>
        <Text style={styles.progressoPeso}>📈 +4kg</Text>
      </View>

      <View style={styles.secaoMedidas}>
        <Text style={styles.tituloSecao}>Medidas Corporais</Text>
        {medidas.map((m, index) => (
          <View key={index} style={styles.medidaLinha}>
            <Text style={styles.medidaParte}>{m.parte}</Text>
            <Text style={styles.medidaValor}>{m.valor}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.botaoAtualizar} onPress={enviarAtualizacao}>
        <Text style={styles.textoBotao}>Enviar novas medidas</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
