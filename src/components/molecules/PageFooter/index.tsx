import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PageFooter = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.label}>目</Text> */}
    </View>
  );
};

export default PageFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 37,
    position: 'relative',
    bottom: -100,
    width: '100%',
    height: 200,
  },
  label: {
    width: 360,
    height: 500,
    textAlignVertical: 'center', // To center the text vertically
    textAlign: 'center', // To center the text horizontally
    fontSize: 36, // You may adjust the font size as needed
    color: '#000000', // You may adjust the text color as needed
  },
});
