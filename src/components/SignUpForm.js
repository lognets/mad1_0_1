import React, { Component } from 'react';

import { StyleSheet, Text,   View, TextInput ,TouchableOpacity} from 'react-native';

export default class SignUpForm extends Component {
    render() {
        return ( 
            <View style={styles.container}>
            <TextInput style={styles.inputBox} 
             underlineColorAndroid ='rgba(0,0,0,0,0)'
             placeholder ="First Name"
             placeholderTextColor ="#ffffff" selectioColor =  "#ffffff"
              onSubmitEditing={() => this.lastName.focus()}
             />
              <TextInput style={styles.inputBox} 
             underlineColorAndroid ='rgba(0,0,0,0,0)'
             placeholder ="Last Name"
             placeholderTextColor ="#ffffff" selectioColor =  "#ffffff"
             ref={(input) => this.lastName =input}
              onSubmitEditing={() => this.emailAddressSignUp.focus()}
             />
             <TextInput style={styles.inputBox} 
             underlineColorAndroid ='rgba(0,0,0,0,0)'
             placeholder ="Email"
             placeholderTextColor ="#ffffff" selectioColor =  "#ffffff"
             ref={(input) => this.lastName =input}
              onSubmitEditing={() => this.passwordSignUp.focus()}
             />
              <TextInput style={styles.inputBox} 
             underlineColorAndroid ='rgba(0,0,0,0,0)'
             placeholder ="Password"
              secureTextEntry={true}
             placeholderTextColor ="#ffffff" selectioColor =  "#ffffff"
              ref={(input) => this.passwordSignUp =input}
             />
             
             <TouchableOpacity style ={styles.button} onPress={this.home}>
                  <Text style={styles.buttonText}>{this.props.type}</Text>
             </TouchableOpacity> 
            </View>
        );
      }
     
    }
 const styles = StyleSheet.create({
   container: {
         flexGrow: 1,
         justifyContent :'center',
         alignItems: 'center',
     },
     inputBox:{
         width:300,
         backgroundColor: 'rgba(255,255,255,0.3)',
         borderRadius :25,
         paddingHorizontal:60,
         height :35,
         textAlign :'center',
         fontSize:16,
         marginVertical:10
     },
     buttonText:{
       fontSize:16,
       color :'#ffffff',
       fontWeight:'500',
        textAlign :'center'
     },
     button:{
         width:300,
         backgroundColor: '#4527a0',
         borderRadius :25,
         textAlign :'center',
         fontSize:16,
         marginVertical:10,
         paddingVertical :12
     }

 });