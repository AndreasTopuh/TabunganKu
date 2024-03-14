import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, PageHeader, TextInput} from '../../components';
import {BackButton, Profile} from '../../assets/icon';
const SignUp = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <PageHeader label="Sign Up" />
      </View>

      <Gap height={24} />

      <View style={styles.contentWrapper}>
        <Gap height={26} />
        <View style={styles.center}>
          <Profile />
        </View>

        <Gap height={16} />

        <TextInput 
          label="Full Name" 
          placeholder="Type your full name" 
        />

        <Gap height={16} />

        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />

        <Gap height={24} />

        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />

        <Gap height={24} />

        <Button label="Continue" />

        <Gap height={12} />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
    // paddingBottom: 40,
  },
  header: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  center: {
    alignItems: 'center',

    // width: 300,
    // width: 110,
    // height: 110,
  },
});
