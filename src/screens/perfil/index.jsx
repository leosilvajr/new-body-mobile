import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useAuth } from '../../contexts/AuthContext';
import styles from './styles';
import axios from 'axios';
import { ROUTES } from '../../constants/apiRoutes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BotaoCancelar from '../../components/botaoCancelar';

export default function PerfilScreen({ navigation }) {
  const { authData, logout } = useAuth();
  const [editando, setEditando] = useState(false);
  const [perfil, setPerfil] = useState(null);

  const [form, setForm] = useState({
    username: '',
    cpf: '',
    tipo: '',
    status: '',
    nomeCompleto: '',
    email: '',
    telefone: '',
    endereco: '',
    cidade: '',
    estado: '',
    cep: '',
    fotoUrl: '',
    dataCadastro: '',
  });

  useEffect(() => {
    if (authData?.id) {
      axios.get(`${ROUTES.USUARIOS}/${authData.id}`)
        .then((res) => {
          const data = res.data;
          setPerfil(data);
          setForm({
            username: data.username,
            cpf: data.cpf,
            tipo: data.tipo,
            status: data.status?.toString(),
            nomeCompleto: data.detalhes?.nomeCompleto || '',
            email: data.detalhes?.email || '',
            telefone: data.detalhes?.telefone || '',
            endereco: data.detalhes?.endereco || '',
            cidade: data.detalhes?.cidade || '',
            estado: data.detalhes?.estado || '',
            cep: data.detalhes?.cep || '',
            fotoUrl: data.detalhes?.fotoUrl || '',
            dataCadastro: data.dataCadastro,
          });
        })
        .catch(() => {
          Alert.alert("Erro", "Falha ao carregar o perfil.");
        });
    }
  }, [authData]);

  const handleLogout = async () => {
    try {
      await axios.post(ROUTES.REVOKE, null, {
        headers: { Authorization: `Bearer ${authData?.token}` },
      });
    } catch {}
    await logout();
    navigation.replace("Login");
  };

  const handleSalvar = () => {
    const payload = {
      username: form.username,
      cpf: form.cpf,
      tipo: form.tipo,
      status: parseInt(form.status),
      detalhes: {
        nomeCompleto: form.nomeCompleto,
        email: form.email,
        telefone: form.telefone,
        endereco: form.endereco,
        cidade: form.cidade,
        estado: form.estado,
        cep: form.cep,
        fotoUrl: form.fotoUrl,
      },
    };

    axios.put(`${ROUTES.USUARIOS}/${authData.id}`, payload)
      .then(() => {
        Alert.alert("Sucesso", "Perfil atualizado com sucesso.");
        setEditando(false);
      })
      .catch(() => {
        Alert.alert("Erro", "Não foi possível salvar as alterações.");
      });
  };

  const renderCampo = (label, campo, editable = true, keyboardType = 'default') => (
    <View key={campo}>
      <Text style={styles.label}>{label}</Text>
      {editando && editable ? (
        <TextInput
          style={styles.input}
          value={form[campo]}
          onChangeText={(text) => setForm({ ...form, [campo]: text })}
          keyboardType={keyboardType}
        />
      ) : (
        <Text style={styles.value}>{form[campo]}</Text>
      )}
    </View>
  );

  if (!perfil) return <Text style={{ padding: 20 }}>Carregando...</Text>;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        {form.fotoUrl ? (
          <Image source={{ uri: form.fotoUrl }} style={styles.avatar} />
        ) : (
          <Icon name="account-circle" size={100} color="#ccc" />
        )}
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Informações de Acesso</Text>
        {renderCampo('Usuário', 'username')}
        {renderCampo('CPF', 'cpf')}
        {renderCampo('Tipo', 'tipo', false)}

        <Text style={styles.label}>Status</Text>
        {editando ? (
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={form.status}
              onValueChange={(value) => setForm({ ...form, status: value })}
              style={styles.picker}
            >
              <Picker.Item label="Ativo" value="0" />
              <Picker.Item label="Inadimplente" value="1" />
              <Picker.Item label="Vencido" value="2" />
              <Picker.Item label="Inativo" value="3" />
            </Picker>
          </View>
        ) : (
          <Text style={styles.value}>
            {{
              0: 'Ativo',
              1: 'Inadimplente',
              2: 'Vencido',
              3: 'Inativo',
            }[parseInt(form.status)] || 'Desconhecido'}
          </Text>
        )}

        <Text style={styles.sectionTitle}>Dados Pessoais</Text>
        {renderCampo('Nome Completo', 'nomeCompleto')}
        {renderCampo('Email', 'email')}
        {renderCampo('Telefone', 'telefone')}
        {renderCampo('Endereço', 'endereco')}
        {renderCampo('Cidade', 'cidade')}
        {renderCampo('Estado', 'estado')}
        {renderCampo('CEP', 'cep')}

        <Text style={styles.sectionTitle}>Cadastro</Text>
        {renderCampo('Data de Cadastro', 'dataCadastro', false)}

        <View style={styles.buttonsRow}>
          {editando ? (
            <>
              <TouchableOpacity style={styles.saveButton} onPress={handleSalvar}>
                <Icon name="content-save" size={20} color="#fff" />
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
              <BotaoCancelar onPress={() => setEditando(false)} />
            </>
          ) : (
            <TouchableOpacity style={styles.editButton} onPress={() => setEditando(true)}>
              <Icon name="pencil" size={20} color="#fff" />
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {!editando && (
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Icon name="logout" size={20} color="#fff" />
          <Text style={styles.logoutText}>Desconectar</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}
