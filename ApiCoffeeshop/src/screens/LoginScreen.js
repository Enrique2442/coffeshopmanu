import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import fetchData from '../../api/components';

const LoginScreen = ({ logueado, setLogueado }) => {

  const [alias, setAlias] = useState('');
  const [clave, setClave] = useState('');

  const USER_API = 'services/admin/administrador.php';

  const handleLogin = async () => {
    const formData = new FormData();
    formData.append('alias', alias);
    formData.append('clave', clave);

    try {
      const data = await fetchData(USER_API, 'logIn', formData);
      if (data.status) {
        setLogueado(!logueado);
      } else {
        console.log(data);
        Alert.alert('Error sesion', data.error);
      }
    } catch (error) {
      console.log(data.error);
      Alert.alert('Error sesion', data.error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <TextInput
        label="Usuario"
        value={alias}
        onChangeText={setAlias}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Contraseña"
        value={clave}
        onChangeText={setClave}
        style={styles.input}
        secureTextEntry
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Iniciar Sesión
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#6200ee',
  },
  input: {
    marginBottom: 15,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#6200ee',
  },
});

export default LoginScreen;