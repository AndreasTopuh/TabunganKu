import {StyleSheet, View, ScrollView, Text} from 'react-native';
import React from 'react';
import {Button, Gap, PageHeader, PageFooter } from '../../components';

const HomePage = ({navigation, label}) => {
  return (
    <ScrollView style={styles.container}>
      <PageHeader type="withPhoto" />

      <Gap height={24} />

      <View style={styles.contentWrapper}>
        <Gap height={26} />

        <View>
          <Text style={styles.textContainer1}>Your Ballance</Text>
          <Text style={styles.textContainer2}>Rp. 10.000.000</Text>
          <Text style={styles.textContainer}>⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</Text>
          <Text style={styles.textContainer3}>Cash on Bank Rp. 4.000.000</Text>
          <Text style={styles.textContainer3}>Cash on Hand Rp. 6.000.000</Text>
        </View>

        <Gap height={24} />
      </View>

      <Gap height={24} />

      <View style={styles.contentWrapper}>
        <Gap height={26} />
        <Text style={styles.textContainer4}>Add Transaction</Text>
        <Button
          label="Cash On Hand"
          backgroundColor="#02CF8E"
          textColor="#000000"
          onPress={() => navigation.navigate('SignUp')}
        />
        <Gap height={18} />
        <Button
          label="Cash On Bank"
          backgroundColor="#02CF8E"
          textColor="#000000"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
      <Gap height={26} />

      <PageFooter />
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  textContainer: {
    color: '#000',
    fontFamily: 'Poppins-Light',
  },
  textContainer1: {
    color: '#000',
    fontSize: 24,
    fontFamily: 'Poppins-Light',
    // fontWeight: 'bold',
  },
  textContainer2: {
    color: '#000',
    fontSize: 28,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  textContainer3: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Poppins-Light',
  },
  textContainer4: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});

{
  /* <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button
          label="Sign In"
          onPress={() => navigation.navigate('HomePage')}
        />
        <Gap height={12} />
        <Button
          label="Add New Account"
          backgroundColor="#8D92A3"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('SignUp')}
        /> */
}
