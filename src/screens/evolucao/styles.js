import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dataAtualizacao: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  graficoPeso: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  pesoAtual: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  pesoAnterior: {
    fontSize: 16,
    color: '#444',
    marginTop: 6,
  },
  progressoPeso: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: '600',
    color: '#2e7d32',
  },
  secaoMedidas: {
    marginBottom: 30,
  },
  tituloSecao: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  medidaLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  medidaParte: {
    fontSize: 16,
    fontWeight: '500',
  },
  medidaValor: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
  },
  botaoAtualizar: {
    backgroundColor: '#1976D2',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
