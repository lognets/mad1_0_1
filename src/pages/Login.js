import React, { Component } from 'react';
import {    Actions } from 'react-native-router-flux'; // 4.0.0-beta.28 
import { StyleSheet,Text, TouchableOpacity,   View} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/LoginForm';
import { Ionicons } from '@expo/vector-icons'; // 6.3.0
export  class Login extends Component  {
    singUp(){
      Actions.signUp();
    }
    render() {
      return ( 
          <View style={styles.container}>
            <Text>Login</Text> 
            <Logo/>
            <Form  type="Login"/>
            <View >
            <Text style={styles.orText}> OR </Text>
             <TouchableOpacity style ={styles.buttonFacebook}>
                  <Text style={styles.buttonText}>  <Ionicons name="logo-facebook" size={16} color="white" />  Login with Facebook</Text>
             </TouchableOpacity>
             
             <TouchableOpacity style ={styles.buttonGoogle}>
                 <Text style={styles.buttonText}><Ionicons name="logo-google" size={16} color="white" />  Login with Google </Text>
             </TouchableOpacity>
            
            </View>
            <View style ={styles.signUpText}>
              <Text style ={styles.signUp}> Don't have an account yet?</Text>
              <TouchableOpacity onPress={this.singUp}><Text style= {styles.signUpButton}>  Sign Up</Text></TouchableOpacity>
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
    ,
     buttonText:{
       fontSize:16,
       color :'#ffffff',
       fontWeight:'500',
        textAlign :'center'
     },
     buttonGoogle:{
         width:300,
         backgroundColor: '#b71c1c',
         borderRadius :25,
         textAlign :'center',
         fontSize:16,
         marginVertical:10,
         paddingVertical :12
     },
     buttonFacebook:{
         width:300,
         backgroundColor: '#1565c0',
         borderRadius :25,
         textAlign :'center',
         fontSize:16,
         marginVertical:10,
         paddingVertical :12
     },
    orText:{
      textAlign:'center',
         marginVertical:5,
         fontSize:18,
         color:'rgba(255,255,255,0.7)',
          alignItems: 'center',
           justifyContent :'center',
     }
  });
