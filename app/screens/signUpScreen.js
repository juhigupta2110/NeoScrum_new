import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Platform,
  Image,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Icons from 'react-native-vector-icons/Feather';
import IconsFeather from 'react-native-vector-icons/FontAwesome';
//import ImagePicker from 'react-native-image-crop-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FormData from 'form-data';
import axios from 'axios';
import {connect} from 'react-redux';
import {globalStyles} from '../style/global/globalStyles';
import {apiService} from '../libs/apiCall';

let options = {
  title: 'Select Image',
  // customButtons: [
  //   {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
  // ],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  // includeBase64: false,
};

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: {},
      email: '',
      name: '',

      nameValidate: true,
      emailValidate: true,
    };
  }

  onResponse = (res) => {
    console.log('inside register .....');
    console.log(res);
  };

  handleClick = async () => {
    var data = new FormData();
    data.append('profileImage', this.state.photo);
    data.append('email', this.state.email);
    data.append('name', this.state.name);

    apiService.signUp(data, this.onResponse, 'post');

    // data = {
    //   email: this.state.email,
    //   name: this.state.name,
    // };

    //   axios
    //     .post('https://799e15882c89.ngrok.io/register', data, {
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //     })
    //     .then((response) => {
    //       console.log('inside register .....');
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log('catch error block', error);
    //     });
  };

  selectImage = () => {
    launchImageLibrary(options, (response) => {
      console.log('Response ......= ', response);
      if (response.didCancel) {
        console.log('User cancelled photo picker');
        alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        this.setState({
          photo: response,
        });
      }
    });
  };

  handleValidUser = (val) => {
    let alph = /^[a-zA-Z]+$/;
    if (!alph.test(val) || val.length < 6) {
      this.setState({
        nameValidate: false,
      });
    } else {
      this.setState({nameValidate: true});
    }
  };

  handleValidEmail = (val) => {
    let emailChk =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailChk.test(val)) {
      this.setState({
        emailValidate: false,
      });
    } else this.setState({emailValidate: true});
  };

  addUsername = (email, username) => {
    this.props.dispatch({type: 'LOGIN', payload: {email, username}});
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#009387" barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.text_header}>Register Employee</Text>
          </View>
          <Animatable.View
            animation="fadeInUpBig"
            style={styles.footer}
            useNativeDriver={true}>
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
              <IconsFeather name="user-o" color="#05375a" size={20} />
              <TextInput
                placeholder="Username"
                style={styles.textInput}
                autoCapitalize="none"
                onEndEditing={(e) => this.handleValidUser(e.nativeEvent.text)}
                onChangeText={(text) => {
                  this.setState({name: text});
                }}
              />
              {this.state.nameValidate && this.state.name != '' ? (
                <Animatable.View animation="bounceIn" useNativeDriver={true}>
                  <Icons name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>

            {this.state.nameValidate ? null : (
              <Animatable.View
                animation="fadeInLeft"
                useNativeDriver={true}
                duration={500}
                style={globalStyles.errorInputViewStyle}>
                <Text style={globalStyles.errorFormInputStyle}>
                  Invalid name
                </Text>
              </Animatable.View>
            )}

            <Text style={[styles.text_footer, {marginTop: 35}]}>Email</Text>
            <View style={styles.action}>
              <Icons name="mail" color="#05375a" size={20} />
              <TextInput
                placeholder="Email"
                style={styles.textInput}
                autoCapitalize="none"
                onEndEditing={(e) => this.handleValidEmail(e.nativeEvent.text)}
                onChangeText={(text) => {
                  this.setState({email: text});
                }}
              />
              {this.state.emailValidate && this.state.email != '' ? (
                <Animatable.View animation="bounceIn" useNativeDriver={true}>
                  <Icons name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>

            {this.state.emailValidate ? null : (
              <Animatable.View
                animation="fadeInLeft"
                useNativeDriver={true}
                duration={500}
                style={globalStyles.errorInputViewStyle}>
                <Text style={globalStyles.errorFormInputStyle}>
                  Invalid email
                </Text>
              </Animatable.View>
            )}

            <View style={styles.buttonChooseView}>
              <TouchableOpacity onPress={() => this.selectImage()}>
                <LinearGradient
                  colors={['#ffff', '#f9f5db']}
                  style={styles.buttonChoose}>
                  <Text style={styles.textChoose}>Choose Image</Text>
                </LinearGradient>
              </TouchableOpacity>
              {this.state.photo == null ? (
                <Text
                  style={[
                    styles.textChoose,
                    {marginLeft: -30, alignSelf: 'flex-end', marginBottom: 5},
                  ]}>
                  No photo selected
                </Text>
              ) : null}
              {this.state.photo != '' ? (
                <Animatable.View animation="bounceIn" useNativeDriver={true}>
                  <Icons name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={this.handleClick}>
                <LinearGradient
                  colors={['#08d4c4', '#01ab9d']}
                  style={styles.signIn}>
                  <Text style={[styles.textSign, {color: 'white'}]}>
                    Sign Up
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={[
                  styles.signIn,
                  {borderWidth: 1, marginTop: 15, borderColor: '#009387'},
                ]}>
                <Text style={[styles.textSign, {color: '#009387'}]}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(SignUpScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonChooseView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginTop: 50,
    color: '#05375a',
  },
  buttonChoose: {
    width: '120%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#e3e3e5',
  },

  textChoose: {
    fontSize: 16,
  },
});
