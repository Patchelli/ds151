import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logica from './src/components/logica/Logica'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calculadora de Média</Text>
      <Logica />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default App;
