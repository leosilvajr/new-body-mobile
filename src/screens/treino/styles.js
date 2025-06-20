import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  nomePlano: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  treinoHoje: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  grupo: {
    marginBottom: 30,
  },
  tituloGrupo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 4,
  },
  exercicio: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  exercicioConcluido: {
    backgroundColor: '#d4edda',
  },
  nomeExercicio: {
    fontSize: 16,
    fontWeight: '600',
  },
  series: {
    fontSize: 14,
    color: '#666',
  },
  textoConcluido: {
    color: '#2e7d32',
    textDecorationLine: 'line-through',
  },
  botaoFinalizar: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  mensagemConcluido: {
    fontSize: 16,
    color: '#4CAF50',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
