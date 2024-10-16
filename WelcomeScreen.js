import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const WelcomeScreen = () => {
  const navigation = useNavigation(); // Khai báo navigation

  return (
    <ImageBackground
      source={require('./images/8140 1.png')} // Thay thế bằng URL ảnh nền của bạn
      style={styles.background}
    >
      <View style={styles.overlay}>
        
        {/* Hình ảnh cà rốt */}
        <Image 
          source={require('./images/Group.png')} // Thay thế bằng URL của hình ảnh cà rốt
          style={styles.carrotImage}
        />

        {/* Text "Welcome" và "to our store" */}
        <View style={styles.textContainer}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.toOurStore}>to our store</Text>
          <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
        </View>

        {/* Nút bấm "Get Started" */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Login')} // Điều hướng đến LoginScreen
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  carrotImage: {
    width: 50, // Kích thước ảnh cà rốt (tuỳ chỉnh theo ý muốn)
    height: 60,
    marginBottom: 10, // Khoảng cách giữa hình ảnh cà rốt và chữ Welcome
  },
  textContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 48, // Kích thước lớn hơn cho chữ "Welcome"
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  toOurStore: {
    fontSize: 50, // Kích thước lớn hơn cho chữ "to our store"
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5, // Khoảng cách nhỏ giữa hai dòng chữ
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#53B175',
    paddingVertical: 15,
    paddingHorizontal: 130,
    borderRadius: 10,
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
