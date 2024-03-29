import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Button,
  Gap,
  PageHeader,
  TextInput,
  Transaction,
} from '../../components';
// import { CashOnBank } from '..';

const CashOnBank = ({navigation}) => {
  const lastTransactions = [
    {
      date: '17 April 2020',
      description: 'Water, Food',
      amount: '-Rp. 300.000',
    },
    {
      date: '18 April 2020',
      description: 'Office supplies',
      amount: '-Rp. 300.000',
    },
    {
      date: '19 April 2020',
      description: 'Top Up',
      amount: '+Rp. 300.000',
    },
    {
      date: '17 April 2020',
      description: 'Water, Food',
      amount: '-Rp. 300.000',
    },
    {
      date: '18 April 2020',
      description: 'Office supplies',
      amount: '-Rp. 300.000',
    },
    {
      date: '19 April 2020',
      description: 'Top Up',
      amount: '+Rp. 300.000',
    },
    {
      date: '19 April 2020',
      description: 'Top Up',
      amount: '+Rp. 300.000',
    },
    {
      date: '19 April 2020',
      description: 'Top Up',
      amount: '+Rp. 300.000',
    },
  ];

  return (
    // <ScrollView style={styles.container}>
    <View style={styles.container}>
      <PageHeader
        label="CashOnBank"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={24} />
      {/* <View style={[styles.card, styles.shadowProp]}>
        <View>
          <Text style={styles.heading}>
            React Native Box Shadow (Shadow Props)
          </Text>
        </View>
        <Text>
          Using the elevation style prop to apply box-shadow for iOS devices
        </Text>
      </View> */}

      {/* <Gap height={24} /> */}
      <View style={styles.contentWrapper}>
        <Gap height={16} />
        <TextInput label="Description" placeholder="Add the description" />
        <Gap height={16} />
        <TextInput label="Type" placeholder="Debit / Credit" />
        <Gap height={24} />
        <Button label="Save" onPress={() => navigation.navigate('Home')} />
        <Gap height={80} />

        <Text style={styles.titletransaction}>Last 3 Transactions</Text>

        <Gap height={16} />
        <ScrollView>
          {lastTransactions.map((transaction, index) => (
            <Transaction
            //   style={styles.shadowProp}
              key={index}
              date={transaction.date}
              description={transaction.description}
              amount={transaction.amount}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default CashOnBank;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  detail: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    marginVertical: 5,
  },
  titletransaction: {
    marginBottom: -25,
    fontSize: 16,
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  shadowProp: {
    elevation: 5, // untuk Android
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Jika Anda ingin bayangan berwarna abu-abu pada iOS, tambahkan:
    // iOS: {
    //   shadowColor: 'rgba(0,0,0,0.2)',
    // }
  },
});
