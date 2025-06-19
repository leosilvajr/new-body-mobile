import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  saudacao: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  secao: {
    marginBottom: 32,
  },
  tituloSecao: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  calendario: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  diaBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diaFeito: {
    backgroundColor: '#4CAF50',
  },
  diaNaoFeito: {
    backgroundColor: '#ccc',
  },
  diaTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cardTreino: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  nomeTreino: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subinfoTreino: {
    fontSize: 14,
    color: '#555',
    marginVertical: 8,
  },
  botaoVerMais: {
    marginTop: 8,
    paddingVertical: 8,
    backgroundColor: '#4A90E2',
    borderRadius: 6,
    alignItems: 'center',
  },
  textoVerMais: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
