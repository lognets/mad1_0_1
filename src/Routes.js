import React, { Component } from 'react';
import {     Router ,Stack , Screen } from 'react-native-router-flux'; // 4.0.0-beta.28
import {Login} from './pages/Login';
import {SingUp} from './pages/SingUp';
import Home from './pages/Home';
export   class Routes extends Component  {
    render() {
      return ( 
          <Router >
            <Stack key="root" hideNavBar={true}>
            <Screen key="login" component={Login} title="Login" initial={true}/>
             <Screen key="signUp" component={SingUp} title="SingUp" />
              <Screen key="home" component={Home} title="Home" />
             </Stack>
          </Router>
      );
    }
}