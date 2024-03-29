import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const Transaction = ({label, date, description, amount}) => {
  return (
    <View style={styles.transactionItem}>
      <View style={styles.border}>
        <View>
          <Text style={[styles.transactionDate, {color: 'grey'}]}>{date}</Text>
          <Text style={[styles.transactionDate, {color: 'black'}]}>
            {description}
          </Text>
        </View>
        <View>
          <Text
            style={[
              //   styles.transactionAmount,
              amount.startsWith('+') ? styles.greenText : styles.redText,
            ]}>
            {amount}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  border: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    height: 85,
    marginTop: 35,
    marginBottom: -40,
    borderRadius: 10,
  },
  transactionItem: {
    marginBottom: 20,
    // flexGrow: 1,
  },
  transactionDate: {
    fontSize: 14,
    marginBottom: 2,
    marginHorizontal: 10,
    fontFamily: 'Poppins-Regular',
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    // fontFamily: 'Poppins-Regular',
  },
  greenText: {
    color: '#02CF8E',
    // fontFamily: 'Poppins-Bold',
    fontFamily: 'Poppins-Medium',
  },
  redText: {
    color: '#D9435E',
    fontFamily: 'Poppins-Medium',
  },
});
