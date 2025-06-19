import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  nomePlano: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  treinoHoje: {
    fontSize: 16,
    marginBottom: 20,
    color: '#444',
  },
  listaExercicios: {
    marginBottom: 30,
  },
  exercicio: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    elevation: 2,
  },
  nomeExercicio: {
    fontSize: 16,
    fontWeight: '600',
  },
  series: {
    fontSize: 14,
    color: '#666',
  },
  botaoFinalizar: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
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
