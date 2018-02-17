import React, { Component } from 'react';

import { StyleSheet,Text, TouchableOpacity,   View} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/SignUpForm';
//import { Ionicons } from '@expo/vector-icons'; // 6.3.0
import {    Actions } from 'react-native-router-flux'; // 4.0.0-beta.28 
export  class SingUp extends Component  {
   goBack(){
      Actions.pop();
    }
    render() {
      return ( 
          <View style={styles.container}>
            <Text>Login</Text> 
            <Logo/>
            <Form type="Sing Up" />
            
            <View style ={styles.signUpText}>
              <Text style ={styles.signUp}>Already have an account! </Text>
              <TouchableOpacity onPress={this.goBack}> <Text style= {styles.signUpButton}>  Sign In</Text></TouchableOpacity>
            </View>
          </View>
      );
    }
}
  const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent :'flex-end',
        alignItems: 'center',
        backgroundColor :'#7953d2',
        paddingHorizontal:16,
       
    },
    signUpText:{
       flexGrow:1,
        justifyContent :'center',
        alignItems: 'center',
         color: '#1c313a',
         paddingVertical :16,
         flexDirection:'row'
    },signUp:{
      color :'rgba(255,255,255,0.7)',
      fontSize :16
    },
    signUpButton : {
      color:'#ffffff',
      fontSize:16,
      fontWeight:'500'
    }
    
  });
