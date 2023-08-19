import React from 'react';
import { Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native'

const FormMedia = ({ nota1, nota2, setNota1, setNota2, calcularMedia }) => {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Nota 1"
        onChangeText={text => setNota1(text)}
        value={nota1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nota 2"
        onChangeText={text => setNota2(text)}
        value={nota2}
        keyboardType="numeric"
      />
        <TouchableHighlight style={styles.button} onPress={calcularMedia}>
        <Text style={styles.buttonText}>Calcular Média</Text>
      </TouchableHighlight>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default FormMedia;
