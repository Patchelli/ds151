import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ViewResult = ({ media }) => {
  const resultado = media !== '' ? (media < 70 ? 'Reprovado' : 'Aprovado') : '';
  const resultadoStyle = media !== '' ? (media < 70 ? styles.reprovado : styles.aprovado) : {};

  return (
    <View style={styles.container}>
      {media !== '' && <Text style={[styles.resultText, resultadoStyle]}>Resultado: {resultado}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  aprovado: {
    color: 'green', // Cor para aprovado
  },
  reprovado: {
    color: 'red', // Cor para reprovado
  },
});

export default ViewResult;
