import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

export const gambar = [
  {
    id: 1,
    url: require('../public/bi.jpg'),
    title: 'Bank Indonesia',
  },
  {
    id: 2,
    url: require('../public/church2.jpg'),
    title: 'Gereja dari depan',
  },
  {
    id: 3,
    url: require('../public/heaven.jpg'),
    title: 'Jalan menuju',
  },
  {
    id: 4,
    url: require('../public/church1.jpg'),
    title: 'Gereja dari samping',
  },
];

export default function Tugas1() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: 'bold',
          // color: '#000000'
        }}>
        Cerita
      </Text>
      <ScrollView
        horizontal={true}
        >
        {gambar.map(item => {
          return (
            <View style={styles.imageCard} key={item.id}>
              <Image source={item.url} style={styles.image} />

              <Text style={styles.titleStyle}>{item.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'light',
    padding: 8,
  },
  imageCard: {
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 100,
  },

  titleStyle: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 6,
    fontStyle: 'italic',
    marginRight: 15,
  },
});
