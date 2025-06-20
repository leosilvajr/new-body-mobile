import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/login';
import CadastroScreen from '../screens/cadastro';
import ExercicioScreen from '../screens/exercicio';
import TreinoDetalhadoScreen from '../screens/treinoDetalhado'; 
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={CadastroScreen} />
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="Exercicio" component={ExercicioScreen} />
        <Stack.Screen name="TreinoDetalhado" component={TreinoDetalhadoScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
