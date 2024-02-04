import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import AppPro from './components/AppPro';
import Tugas1 from './components/Tugas1';
import FooterBar from './components/FooterBar';
// import Home from './components/Home'

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {/* <Home/> */}
        <Text style={{
          fontSize: 29,
          textAlign: 'center',
          // color: 'white',
          // fontStyle: 'bold'
          fontWeight: 'bold',
          marginTop:20,
          // color: 'white', // BEGIN: Added color property
        }}>
          Welcome Friend
        </Text>
        <TextInput
          style={styles.search}
          placeholder="Cari Gereja"
          placeholderTextColor={'#A4B0BD'}
        />
        {/* <FlatCards /> */}
        {/* <ElevatedCards /> */}
        {/* <AppPro /> */}
        <Tugas1 />
        <FancyCard />
        <FooterBar />

      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B6BBC4', // BEGIN: Added background color
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
  },
});
