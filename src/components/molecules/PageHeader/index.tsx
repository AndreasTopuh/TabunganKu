import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';

const PageHeader = ({label, backButton, onPress, type}) => {
  if (type === 'withPhoto') {
    return (
      <View style={styles.containerTop}>
        <View style={styles.containerwithPhoto}>
          {/* <Text style={styles.text}>PageHeader withPhoto</Text> */}
          {/* <Text>PageHeader withPhoto</Text> */}
          <Text style={styles.label1}>TabunganKu</Text>
          <Text style={styles.label2}>Catat pengeluaranmu</Text>
        </View>
        <Image
          style={styles.fotoProfile}
          source={require('../../../assets/icon/tabunganku.png')}
        />
      </View>
    );
  }

  if (label === 'Sign In') {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </View>
    );
    
  }
  return (
    <View style={styles.container}>
      {backButton && (
        <Button type="icon-only" icon="icon-back" onPress={onPress} />
      )}
      <Text style={styles.labelWithBack}>{label}</Text>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerwithPhoto: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 37,
    flexDirection: 'column', 
  },
  labelWithBack: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginLeft: 26,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
  label1: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginLeft: 26,
  },
  label2: {
    fontFamily: 'Poppins-Light',
    fontSize: 17,
    color: 'grey',
    marginLeft: 26,
    marginBottom: -10,
  },
  text: {
    color: '#020202',
  },
  fotoProfile: {
    width: 60,
    height: 60,
    marginLeft: 'auto',
    marginRight: 30,
    borderWidth: 10,
    borderRadius: 10,
    // borderColor: 'black',
  },
  containerTop: {
    backgroundColor: '#FFFFFF',
    // paddingLeft: 24,
    // paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
    // flexDirection: 'row',
    // alignItems: 'center',
    // marginLeft: 26,
  },
});
