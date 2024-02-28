

import React from 'react'; //IMPORTNYALAH YA

import {
    View,
    Text,
    Button,
    StyleSheet,
    useColorScheme,
} from 'react-native'; //KALAU MO PAKE SUATU COMPONENT TINGGAL IMPORT DULU TAPI TARU DISINI

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark';

    return (
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          {/* <Text style={isDarkMode ? styles.whiteText : styles.whiteText}> */}
          Hello World
        </Text>
        <Text style={isDarkMode ? styles.com : styles.com}>
          {/* <Text style={isDarkMode ? styles.whiteText : styles.whiteText}> */}
          Hello KAWANkhkjhkj
        </Text>
        <Text style={isDarkMode ? styles.darkText : styles.darkText}>
          {/* <Text style={isDarkMode ? styles.whiteText : styles.whiteText}> */}
          s
        </Text>
        <Button 
          onPress={() => {
            console.log('You tapped the button halo!');
          }}
          title="Press Me"
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    },
    com:{
      color:'#f44324'
    },
    hitma:{
      color: '#372623'
    }

});

export default AppPro;
