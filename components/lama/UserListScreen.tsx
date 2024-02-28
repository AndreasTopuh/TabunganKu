// UserListScreen.js

import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';

const UserListScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderUserItem = ({item}: {item: any}) => (
    <View style={{padding: 10}}>
      <Text>Name: {item.name}</Text>
      <Text>Username: {item.username}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Phone: {item.phone}</Text>
      {/* Add more fields as needed */}
    </View>
  );

  return (
    <FlatList
      data={users}
      renderItem={renderUserItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default UserListScreen;
