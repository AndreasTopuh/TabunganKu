import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.content}>Red</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text style={styles.content}>Blue</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text style={styles.content}>Yellow</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text style={styles.content}>Yellow</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text style={styles.content}>Yellow</Text>
          </View>
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
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'center',
  },
  card: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 8,
  },
  content: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'yellow',
  },
});
