import {View, Text, SafeAreaView, ScrollView,Button} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import AppPro from './components/AppPro';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <ElevatedCards/>
        <AppPro/>

        <FlatCards />
        <FancyCard/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
