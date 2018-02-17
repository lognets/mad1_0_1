import React, { Component } from 'react';

import { StyleSheet,View, StatusBar} from 'react-native';

import {Login} from './src/pages/Login';
import {SingUp} from './src/pages/SingUp';
import {Routes } from './src/Routes';
export default class Home extends Component {
    render() {
      return ( 
          <View style={styles.container}>
            <StatusBar backgroundColor='#1c313a'
            barStyle='light-content' />
          <SingUp/>
          </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent :'center',
        alignItems: 'center',
        backgroundColor :'#4527a0'
    }
  });
