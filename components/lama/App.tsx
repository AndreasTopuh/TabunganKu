import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  StyleSheet, 
  ScrollView 
} from 'react-native';

export const gambar = [
  {
    id: 1,
    url: {
      uri: 'https://assets.rappler.com/612F469A6EA84F6BAE882D2B94A4B421/img/C2BCF1621941415F835FE0B0587D2690/bank-indonesia-20171208_C2BCF1621941415F835FE0B0587D2690.jpg',
    },
    title: 'Bank Indonesia',
  },
  {
    id: 2,
    url: {
      uri: 'https://i.pinimg.com/originals/37/39/dc/3739dc3030f436978e5e538903a54ca9.jpg',
    },
    title: 'Gereja dari depan',
  },
  {
    id: 3,
    url: {
      uri: 'https://1.bp.blogspot.com/-duzxzituX_o/T1jVP63u8EI/AAAAAAAAAg0/TGbGGtXqvwo/s1600/IMG_1486.JPG',
    },
    title: 'Jalan menuju',
  },
  {
    id: 4,
    url: {
      uri: 'https://3.bp.blogspot.com/-7OUOP7XIOpU/VUMtpDEW1DI/AAAAAAAAF8Y/p4RjAFiYrhU/s1600/kayutangan.jpg',
    },
    title: 'Gereja dari samping',
  },
];

export default function Tugas2() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: 'bold',
          color: '#FFFFFF' // Set text color to white
        }}>
        Cerita
      </Text>
      <ScrollView horizontal={true}>
        {gambar.map(item => {
          return (
            <View style={styles.imageCard} key={item.id}>
              <Image source={item.url} style={styles.image} />

              <Text style={styles.titleStyle}>{item.title}</Text>
            </View>
          );
        })}
      </ScrollView>
      <TextInput
        style={styles.search}
        placeholder="Cari Gereja"
        placeholderTextColor={'#A4B0BD'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F363F', 
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
    color: '#FFFFFF' 
  },
  search: {
    height: 44,
    backgroundColor: '#F1EFEF',
    borderRadius: 16,
    marginTop: 16,
    marginBottom: 5,
    marginHorizontal: 10,
    paddingLeft: 10,
    color: '#2F363F',
  }
});
