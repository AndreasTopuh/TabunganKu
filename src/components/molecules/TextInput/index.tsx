import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React, {useState} from 'react';

const TextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input
        style={[styles.textInput, isFocused ? styles.textInputFocused : null]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onFocus={handleFocus} // Panggil fungsi handleFocus saat TextInput mendapatkan fokus
        onBlur={handleBlur} // Panggil fungsi handleBlur saat TextInput kehilangan fokus
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
    marginBottom: 6,
  },
  textInput: {
    borderColor: '#020202',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    paddingVertical: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8D92A3',
  },
  textInputFocused: {
    borderColor: 'green', // Ubah ke warna hijau saat dalam fokus
  },
});
