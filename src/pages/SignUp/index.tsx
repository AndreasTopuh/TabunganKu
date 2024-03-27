import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import {Button, Gap, PageHeader, TextInput} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <PageHeader
        label="Sign Up"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={24} />

      <View style={styles.contentWrapper}>
        
        <View style={styles.profileContainer}>
          <View style={styles.profile}>
            <View style={styles.addPhoto}>
              <TouchableOpacity>
                <Text style={styles.addPhotoLabel}>Add Photo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>


        <Gap height={26} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button
          label="Continue"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  profileContainer: {
    marginTop: 26,
    alignItems: 'center',
  },
  profile: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 160,
    width: 160,
    borderRadius: 160 / 2,
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
  },
  addPhoto: {
    backgroundColor: '#F0F0F0',
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhotoLabel: {
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    width: 40,
    textAlign: 'center',
    color: '#8D92A3',
  },
});
