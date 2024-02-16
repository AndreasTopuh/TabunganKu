import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    ScrollView
} from 'react-native';

export default function Tugas3() {

    return (
        <View style={[styles.container]}>
            <Text
                style={{
                    fontSize: 45,
                    fontWeight: 'bold',
                    color: 'black', // Set text color to white
                    paddingLeft: 10,
                    marginVertical: 20,
                    paddingBottom: 20,
                }}>
                Welcome
            </Text>

            <View>
                <Text
                    style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        color: 'black', // Set text color to white
                        paddingLeft: 10,
                    }}>
                    Username
                </Text>
                <TextInput
                    style={styles.search}
                    placeholder="Masuka username anda"
                    placeholderTextColor={'#5C5470'}
                />
            </View>

            <View style={styles.password}>
                <Text
                    style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        color: 'black', // Set text color to white
                        paddingLeft: 10,
                    }}>
                    Password
                </Text>
                <TextInput
                    style={styles.search}
                    placeholder="Masuka password anda"
                    placeholderTextColor={'#5C5470'}
                />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text>Press Here</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#E3651D',
        padding: 10,
        marginTop: 50,
        borderRadius: 12,
        height: 50,
        justifyContent: 'center',
        marginHorizontal: 10,
    
    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
    },
    search: {
        height: 65,
        borderRadius: 16,
        marginTop: 6,
        marginBottom: 5,
        marginHorizontal: 10,
        paddingLeft: 10,
        color: '#2F363F',
        borderColor: 'black',
        borderWidth: 1,
    },
    password: {
        marginTop: 20,
    },
});
