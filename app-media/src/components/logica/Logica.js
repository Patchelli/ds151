import React, { useState } from 'react';
import FormMedia from '../form/FormMedia';
import ViewResult from '../view/ViewResult';
import { View, Text, StyleSheet } from 'react-native';

const Logica = () => {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [media, setMedia] = useState('');

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

  const resultado = media !== '' ? (media < 70 ? 'Reprovado' : 'Aprovado') : '';
  const resultadoStyle = media !== '' ? (media < 70 ? styles.reprovado : styles.aprovado) : {};

  return (
    <>
      <FormMedia
        nota1={nota1}
        nota2={nota2}
        setNota1={setNota1}
        setNota2={setNota2}
        calcularMedia={calcularMedia}
      />
      <ViewResult media={media} />
      <View style={styles.resultContainer}>
        <Text style={[styles.resultText, resultadoStyle]}>{resultado}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
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

export default Logica;
