import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  nomePlano: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
    color: COLORS.blue,
  },
  treinoHoje: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
    color: "#555",
  },
  grupo: {
    marginBottom: 20,
  },
  grupoHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  tituloGrupo: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.blue,
    textTransform: "uppercase",
    letterSpacing: 0,
  },
  exercicio: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
  },
  nomeExercicio: {
    fontSize: 16,
    fontWeight: "500",
  },
  series: {
    fontSize: 14,
    color: "#555",
  },
  exercicioConcluido: {
    backgroundColor: "#c5f7c5",
  },
  textoConcluido: {
    textDecorationLine: "line-through",
    color: "#666",
  },
  botaoFinalizar: {
    backgroundColor: "#4caf50",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  mensagemConcluido: {
    textAlign: "center",
    color: "green",
    fontSize: 16,
    marginTop: 20,
  },
  inputPeso: {
    marginTop: 6,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    backgroundColor: "#fff",
    fontSize: 14,
    color: "#333",
  },
});

export default styles;
