import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function BotaoCancelar({ onPress }) {
  return (
    <TouchableOpacity style={styles.cancelButton} onPress={onPress}>
      <Icon name="close-circle" size={20} color="#fff" />
      <Text style={styles.cancelText}>Cancelar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cancelButton: {
    flexDirection: 'row',
    backgroundColor: '#e53935',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  cancelText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
