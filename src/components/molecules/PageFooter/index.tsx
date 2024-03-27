import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PageFooter = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.label}></Text> */}
    </View>
  );
}

export default PageFooter

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        // paddingLeft: 24,
        paddingVertical: 37,
        // flexDirection: 'row-reverse',
        position: 'relative',
        bottom: -100,
        // justifyContent: 'flex-end',
        // alignItems: 'center',
    },
});