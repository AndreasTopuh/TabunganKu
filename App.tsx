import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tabungan Ku</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#02CF8E',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    color: 'black',
  },
});
