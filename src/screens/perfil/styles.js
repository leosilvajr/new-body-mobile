import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#777',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#e53935',
    padding: 12,
    marginTop: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Estilos para o modal personalizado de logout
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    width: '85%',
    alignItems: 'center',
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 6,
    marginRight: 8,
    alignItems: 'center',
  },
  cancelText: {
    color: '#333',
    fontWeight: 'bold',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#e53935',
    padding: 12,
    borderRadius: 6,
    marginLeft: 8,
    alignItems: 'center',
  },
  confirmText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
