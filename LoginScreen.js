import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const LoginScreen = () => {
  const [phoneCode, setPhoneCode] = useState('+880');
  const [phoneNumber, setPhoneNumber] = useState('');

  const phoneCodes = [
    { label: '+880', value: '+880' },
    { label: '+1', value: '+1' },
    { label: '+44', value: '+44' },
  ];

  return (
    <View style={styles.container}>
      {/* Ảnh nền ở phía trên */}
      <Image
        source={require('./images/Mask Group.png')}
        style={styles.topImage}
      />

      {/* Phần tiêu đề */}
      <Text style={styles.title}>Get your groceries</Text>
      <Text style={styles.subtitle}>with nectar</Text>

      {/* Phần nhập số điện thoại với cờ */}
      <View style={styles.phoneContainer}>
        {/* Hình ảnh cờ */}
        <Image 
          source={require('./images/Rectangle 11.png')}
          style={styles.flagImage}
        />
        
        {/* Hiển thị đầu số điện thoại đã chọn ngay bên cạnh cờ */}
        <Text style={styles.phoneCode}>{phoneCode}</Text>

        {/* Picker cho đầu số điện thoại */}
        <RNPickerSelect
          onValueChange={(value) => setPhoneCode(value)}
          items={phoneCodes}
          style={pickerSelectStyles}
          value={phoneCode}
        />

        <TextInput
          style={styles.phoneInput}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber} // Cập nhật số điện thoại khi người dùng nhập
        />
      </View>

      {/* Dòng chia cách */}
      <Text style={styles.dividerText}>Or connect with social media</Text>

      {/* Nút Google */}
      <TouchableOpacity style={styles.socialButton}>
        <Image source={require('./images/Group 6795.png')} style={styles.icon} />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Nút Facebook */}
      <TouchableOpacity style={styles.socialButton}>
        <Image source={require('./images/Vector.png')} style={styles.icon} />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  topImage: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
    marginTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    color: '#000',
    marginBottom: 20,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 1,
    width: '100%',
    marginBottom: 20,
  },
  phoneCode: {
    fontSize: 16,
    marginHorizontal: 1, // Thay đổi để gần hơn với picker
    alignSelf: 'center', // Center the phone code vertically
  },
  flagImage: {
    width: 30,
    height: 24,
    marginRight: 5, // Thay đổi khoảng cách giữa cờ và đầu số điện thoại
  },
  phoneInput: {
    fontSize: 16,
    flex: 1,
  },
  dividerText: {
    color: '#888',
    fontSize: 14,
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: '#4285F4', // Change this based on the button
    borderRadius: 15,
    paddingVertical: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    flex: 1, // Makes sure text takes up available space
    textAlign: 'center', // Center text
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 10, // Adds horizontal spacing around the icon
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: '#000',
    marginRight: 5, // Thay đổi khoảng cách giữa picker và đầu số điện thoại
    width: 80,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: '#000',
    marginRight: 5, // Thay đổi khoảng cách giữa picker và đầu số điện thoại
    width: 80,
  },
});

export default LoginScreen;
