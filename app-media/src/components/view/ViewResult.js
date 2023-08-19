import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ViewResult = ({ media }) => {
  return (
    <View style={styles.container}>
      {media !== '' && <Text style={styles.result}>Média: {media}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Adicione essa linha para centralizar o texto
  },
});

export default ViewResult;
