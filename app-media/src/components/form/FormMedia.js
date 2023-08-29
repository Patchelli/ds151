import React, { useState } from 'react';
import { Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';

const FormMedia = ({ setMedia }) => {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');

  const calcularMedia = () => {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);

    if (isNaN(n1) || isNaN(n2)) {
      alert('Por favor, insira valores numéricos válidos.');
      return;
    }

    const calculatedMedia = (n1 + n2) / 2;
    setMedia(calculatedMedia.toFixed(2));
  };

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
  },
});

export default FormMedia;
