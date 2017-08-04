import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm'

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          <View style={styles.logoContainter}>
            <Image
              style={styles.logo}
              source={require('../../../assets/images/iconWaiter.png')}
            />
            <Text style={styles.title}>
              Welcome to Garcon! Restaurant-Manager
            </Text>
          </View>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc3c7',
  },
  logoContainter:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#c0392b',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 200
  }
});
