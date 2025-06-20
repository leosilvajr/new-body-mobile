import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  TextInput,
  Animated,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import styles from "./styles";
import { COLORS } from "../../constants/theme";

export default function TreinoScreen() {
  const [treinoConcluido, setTreinoConcluido] = useState(false);
  const [concluidos, setConcluidos] = useState({});
  const [expandedGroups, setExpandedGroups] = useState([]);
  const [pesos, setPesos] = useState({});

  const atualizarPeso = (grupoIndex, exIndex, valor) => {
    const key = `${grupoIndex}-${exIndex}`;
    setPesos((prev) => ({ ...prev, [key]: valor }));
  };

  const treinos = [
    {
      titulo: "A - Peito e Ombro",
      exercicios: [
        { nome: "Flexões", series: "5x10" },
        { nome: "Supino Reto", series: "5x10" },
        { nome: "Fly Inclinado com Halteres", series: "5x10" },
        { nome: "Crucifixo Reto com Halteres", series: "5x10" },
        { nome: "Desenvolvimento Convergente Neutro", series: "5x10" },
        { nome: "Drop-set: Elevação Lateral com Halteres", series: "3x21" },
        { nome: "Elevação Frontal na Polia Baixa", series: "3x12" },
        { nome: "Abdominal Prancha", series: "3x1min" },
      ],
    },
    {
      titulo: "B - Braços (Bíceps e Tríceps)",
      exercicios: [
        { nome: "Rosca Direta (Barra H)", series: "4x10" },
        { nome: "Rosca Concentrada", series: "4x10" },
        { nome: "Rosca Direta na Polia", series: "4x10" },
        { nome: "Rosca Inversa (Barra W)", series: "4x10" },
        { nome: "Coice com Halteres", series: "4x10" },
        { nome: "Francês com Corda na Polia Média", series: "4x10" },
        { nome: "Tríceps Pulley", series: "4x10" },
        { nome: "Abdominal: Elevação de Pernas", series: "3x10-12" },
      ],
    },
    {
      titulo: "C - Pernas e Glúteos",
      exercicios: [
        { nome: "Hack", series: "4x10" },
        { nome: "Afundo (Barra Guiada)", series: "4x10" },
        { nome: "Leg 180°", series: "4x10" },
        { nome: "Elevação Pélvica", series: "4x10" },
        { nome: "Extensora", series: "4x10" },
        { nome: "Adutora", series: "4x10" },
        { nome: "Panturrilha Sentada", series: "4x10" },
        { nome: "Abdominal Oblíquo com Halter", series: "3x12" },
      ],
    },
    {
      titulo: "D - Costas e Trapézio",
      exercicios: [
        { nome: "Remada Cavalinho", series: "4x10" },
        { nome: "Puxada Alta Pronada Aberta", series: "4x10" },
        { nome: "Remada Baixa Neutra Fechada", series: "4x10" },
        { nome: "Remada Articulada Pronada", series: "4x10" },
        { nome: "Pulldown com Corda", series: "4x10" },
        { nome: "Encolhimento com Halteres", series: "4x10" },
      ],
    },
  ];

  const toggleConcluido = (grupoIndex, exIndex) => {
    const key = `${grupoIndex}-${exIndex}`;
    setConcluidos((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleGrupo = (index) => {
    setExpandedGroups((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const concluirTreino = () => {
    setTreinoConcluido(true);
    Alert.alert("Parabéns!", "Você concluiu o treino de hoje 💪");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.nomePlano}>Treino Masculino Avançado</Text>
      <Text style={styles.treinoHoje}>Período: 12/05 à 12/07</Text>

      {treinos.map((treino, grupoIndex) => (
        <View key={grupoIndex} style={styles.grupo}>
          <TouchableOpacity onPress={() => toggleGrupo(grupoIndex)}>
            <View style={styles.grupoHeader}>
              <Feather
                name={
                  expandedGroups.includes(grupoIndex)
                    ? "chevron-down"
                    : "chevron-right"
                }
                size={20}
                color={COLORS.blue}
                style={{ marginRight: 8 }}
              />
              <Text style={styles.tituloGrupo}>{treino.titulo}</Text>
            </View>
          </TouchableOpacity>

          {expandedGroups.includes(grupoIndex) &&
            treino.exercicios.map((ex, exIndex) => {
              const key = `${grupoIndex}-${exIndex}`;
              const concluido = concluidos[key];

              return (
                <Animated.View key={key}>
                  <TouchableOpacity
                    style={[
                      styles.exercicio,
                      concluido && styles.exercicioConcluido,
                    ]}
                    onPress={() => toggleConcluido(grupoIndex, exIndex)}
                  >
                    <Text
                      style={[
                        styles.nomeExercicio,
                        concluido && styles.textoConcluido,
                      ]}
                    >
                      {ex.nome}
                    </Text>
                    <Text
                      style={[
                        styles.series,
                        concluido && styles.textoConcluido,
                      ]}
                    >
                      {ex.series}
                    </Text>

                    <TextInput
                      style={styles.inputPeso}
                      placeholder="Carga (kg)"
                      placeholderTextColor="#999"
                      keyboardType="numeric"
                      value={pesos[key] || ""}
                      onChangeText={(valor) =>
                        atualizarPeso(grupoIndex, exIndex, valor)
                      }
                    />
                  </TouchableOpacity>
                </Animated.View>
              );
            })}
        </View>
      ))}

      {!treinoConcluido ? (
        <TouchableOpacity
          style={styles.botaoFinalizar}
          onPress={concluirTreino}
        >
          <Text style={styles.textoBotao}>Concluir Treino</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.mensagemConcluido}>✅ Treino concluído!</Text>
      )}
    </ScrollView>
  );
}
