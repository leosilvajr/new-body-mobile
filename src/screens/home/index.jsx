import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";

const diasSemana = [
  { dia: "Seg", feito: true },
  { dia: "Ter", feito: true },
  { dia: "Qua", feito: false },
  { dia: "Qui", feito: false },
  { dia: "Sex", feito: false },
  { dia: "Sáb", feito: false },
  { dia: "Dom", feito: false },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.saudacao}>Olá, Leonardo! 👋</Text>

      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>Frequência da Semana</Text>
        <View style={styles.calendario}>
          {diasSemana.map((dia, index) => (
            <View
              key={index}
              style={[
                styles.diaBox,
                dia.feito ? styles.diaFeito : styles.diaNaoFeito,
              ]}
            >
              <Text style={styles.diaTexto}>{dia.dia}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>Treino de Hoje</Text>
        <View style={styles.cardTreino}>
          <Text style={styles.nomeTreino}>Peito e Ombro</Text>
          <Text style={styles.subinfoTreino}>Série A - 45 min</Text>
          <TouchableOpacity
            style={styles.botaoVerMais}
            onPress={() => navigation.navigate("TreinoDetalhado")}
          >
            <Text style={styles.textoVerMais}>Ver detalhes do treino</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
