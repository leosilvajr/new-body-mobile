import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

import styles from './styles';

const treinoPeitoOmbro = [
  { nome: 'Flexões', series: '5x10' },
  { nome: 'Supino Reto', series: '5x10' },
  { nome: 'Fly Inclinado com Halteres', series: '5x10' },
  { nome: 'Crucifixo Reto com Halteres', series: '5x10' },
  { nome: 'Desenvolvimento Convergente Neutro', series: '5x10' },
  { nome: 'Drop-set: Elevação Lateral com Halteres', series: '3x21' },
  { nome: 'Elevação Frontal na Polia Baixa', series: '3x12' },
  { nome: 'Abdominal Prancha', series: '3x1min' },
];

export default function TreinoDetalhadoScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Treino de Peito e Ombro</Text>

        {treinoPeitoOmbro.map((ex, index) => (
          <View key={index} style={styles.exercicio}>
            <Text style={styles.nome}>{ex.nome}</Text>
            <Text style={styles.series}>{ex.series}</Text>
          </View>
        ))}

        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
