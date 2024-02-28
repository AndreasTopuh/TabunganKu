import {
  StyleSheet, 
  Text, 
  View, 
  // Image
} from 'react-native';
import React from 'react';


export default function FooterBar() {
  return (
    <View style={styles.container}>
      <View style={styles.Footer}>
        <Text style={styles.footerText}>HALO HALO</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  Footer: {
    backgroundColor: 'white',
    height: 50,
  },
  footerText: {
    color: 'black',
  }
})
 