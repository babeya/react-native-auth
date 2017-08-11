import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  // Lifecycle methods

  componentWillMount() {
    // Initialize firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyCEURs_OS9nQtK-boCP7VIUDzKFiiJTS90',
      authDomain: 'auth-afa4f.firebaseapp.com',
      databaseURL: 'https://auth-afa4f.firebaseio.com',
      projectId: 'auth-afa4f',
      storageBucket: 'auth-afa4f.appspot.com',
      messagingSenderId: '414189996447',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Coucou" />
        <LoginForm>Coucou</LoginForm>
      </View>
    );
  }
}

export default App