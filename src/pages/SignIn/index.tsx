import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';

const SignIn = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Sign In</Text>
      </View>
      <View style={styles.form}>

      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  header: {
    height: 108,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Regular',
    color: '#000',
    top: 37,
    bottom: 38,
    left: 24,
  },
  form: {
    backgroundColor: '#02CF8E',
    flex: 1,
  },
});
