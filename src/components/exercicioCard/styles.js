// /src/components/exercicioCard/styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 6,
  },
  info: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  repeticoes: {
    fontSize: 14,
    color: '#555',
  },
});
