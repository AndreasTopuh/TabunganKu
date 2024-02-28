import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.content}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.content}>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.content}>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.content}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.content}>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.content}>heheh</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    // color: 'red',
    paddingHorizontal: 8,
    // textAlign: 'center',
  },
  content: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: 'black',
    elevation: 4,
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'black',
  },
  container: {
    padding: 8,
  },
});
