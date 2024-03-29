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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // padding: 15,
    // height: 80,
    // marginHorizontal: 20,
    // marginTop: 35,
    // marginBottom: -40,
    padding: 15,
    height: 80,
    marginTop: 35,
    marginBottom: -40,
    marginHorizontal: 5,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  //   border: {
  //     backgroundColor: 'white',
  //     alignItems: 'center',
  //     justifyContent: 'space-between',
  //     flexDirection: 'row',
  //     padding: 20,
  //     height: 85,
  //     marginTop: 35,
  //     marginBottom: -40,
  //     borderRadius: 10,

  //     elevation: 3, // untuk Android
  //     shadowColor: '#000',
  //     shadowOffset: {width: 2, height: 2},
  //     shadowOpacity: 5,
  //     shadowRadius: 5,
  //   },
  transactionItem: {
    marginBottom: 15,
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
