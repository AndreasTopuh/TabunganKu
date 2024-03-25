import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Profile} from '../../../assets/icon';

const ImagePicker = () => {
  return (
    <View style={styles.imgContainer}>
      <Image style={styles.image} />
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  // container: {},
  image: {
    width: 135,
    height: 135,
    borderRadius: 100,
    borderColor: '#F0F0F0',
    backgroundColor: '#F0F0F0',
    // borderWidth: 1 // Change the borderWidth to 1
  },

  imgContainer: {
    width: 170,
    height: 170,
    borderRadius: 100,
    borderColor: '#8D92A3',
    borderWidth: 2,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
