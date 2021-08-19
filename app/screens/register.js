import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import * as Animatable from 'react-native-animatable';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {globalStyles} from '../style/global/globalStyles';
import registerApi from '../api/registerApi';

class Register extends Component {
  handleChoosePhoto = () => {
    console.log('inside handle');
    const options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, (response) => {
      console.log('inside launch image...');
      console.log(response);

      //   if (response.uri) {
      //     this.setState({photo: response});
      //     console.log(this.state.photo);
      //   }
    });
  };

  sendData = () => {
    axios
      .post('http://localhost:4000/register', {
        name: this.state.name,
        email: this.state.email,
      })
      .then((response) => {
        console.log('sending data to api...');
        console.log(response);
      });
  };

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      photo: null,
      nameValidate: true,
      emailValidate: true,
    };
  }

  validate(text, type) {
    alph = /^[a-zA-Z]+$/;
    emailChk =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  }

  handleValidUser = (val) => {
    alph = /^[a-zA-Z]+$/;
    if (!alph.test(val) || val.length < 6) {
      this.setState({
        nameValidate: false,
      });
    } else this.setState({nameValidate: true});
  };

  handleValidEmail = (val) => {
    emailChk =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailChk.test(val)) {
      this.setState({
        emailValidate: false,
      });
    } else this.setState({emailValidate: true});
  };

  render() {
    return (
      <View style={globalStyles.formViewStyle}>
        <TextInput
          placeholder="Employee Name*"
          onChangeText={(text) => {
            this.setState({name: text});
            console.log(text);
          }}
          onEndEditing={(e) => this.handleValidUser(e.nativeEvent.text)}
          style={globalStyles.textInputStyle}
          maxLength={25}
        />

        {this.state.nameValidate ? null : (
          <Animatable.View
            animation="fadeInLeft"
            duration={500}
            style={globalStyles.errorInputViewStyle}>
            <Text style={globalStyles.errorFormInputStyle}>Invalid name</Text>
          </Animatable.View>
        )}

        <TextInput
          placeholder="Email*"
          onChangeText={(text) => {
            this.setState({email: text});
          }}
          onEndEditing={(e) => this.handleValidEmail(e.nativeEvent.text)}
          maxLength={25}
          style={globalStyles.textInputStyle}
        />
        {this.state.emailValidate ? null : (
          <Animatable.View
            animation="fadeInLeft"
            duration={500}
            style={globalStyles.errorInputViewStyle}>
            <Text style={globalStyles.errorFormInputStyle}>Invalid email</Text>
          </Animatable.View>
        )}

        <View style={globalStyles.chooseViewStyle}>
          <LinearGradient
            colors={['#fcf9f9', '#ccc7c7']}
            style={globalStyles.chooseButtonStyle}>
            <TouchableOpacity onPress={this.handleChoosePhoto}>
              <Text style={globalStyles.chooseTextStyle}>Choose file</Text>
            </TouchableOpacity>
          </LinearGradient>
          <Text style={globalStyles.chooseTextStyle}>No files chosen</Text>
        </View>
        <TouchableOpacity
          style={globalStyles.submitButtonStyle}
          onPress={() => this.searchAPI}>
          <Text
            style={globalStyles.submitTextStyle}
            onPress={() => this.sendData}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Register;
