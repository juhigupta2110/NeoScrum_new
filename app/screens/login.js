import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../style/global/globalStyles';

class Login extends Component {
  getData = () => {
    axios.get('http://localhost:4000/GetAllRecievers').then((response) => {
      console.log('getting data.....');
      console.log(response);
    });
  };

  render() {
    return (
      <View style={globalStyles.formViewStyle}>
        <TextInput
          placeholder="Employee Name*"
          style={globalStyles.textInputStyle}
          maxLength={25}
        />
        <TextInput
          placeholder="Password*"
          style={globalStyles.textInputStyle}
          maxLength={25}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={globalStyles.submitButtonStyle}
          onPress={() => this.getData()}>
          <Text style={globalStyles.submitTextStyle}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.registerHereStyle}
          onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={globalStyles.registerHereTextStyle}>Register here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
