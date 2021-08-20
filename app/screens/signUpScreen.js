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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Icons from 'react-native-vector-icons/Feather';
import IconsFeather from 'react-native-vector-icons/FontAwesome';
import {launchImageLibrary} from 'react-native-image-picker';
import FormData from 'form-data';
import {connect} from 'react-redux';

import {globalStyles} from '../style/global/globalStyles';
import {apiService} from '../libs/apiCall';
import {Colors} from '../style/colors/colors';

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
    console.log(res);
  };

  handleClick = async () => {
    var data = new FormData();
    data.append('profileImage', this.state.photo);
    data.append('email', this.state.email);
    data.append('name', this.state.name);

    apiService.signUp(data, this.onResponse, 'post');
  };

  selectImage = () => {
    launchImageLibrary(options, (response) => {
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
          <StatusBar backgroundColor={Colors.GREEN} barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.text_header}>Register Employee</Text>
          </View>
          <Animatable.View
            animation="fadeInUpBig"
            style={styles.footer}
            useNativeDriver={true}>
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
              <IconsFeather
                name="user-o"
                color={Colors.IconColor}
                size={hp('2.5%')}
              />
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
                  <Icons
                    name="check-circle"
                    color={Colors.GREEN}
                    size={hp('2.5%')}
                  />
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

            <Text style={[styles.text_footer, {marginTop: hp('4.375%')}]}>
              Email
            </Text>
            <View style={styles.action}>
              <Icons name="mail" color={Colors.IconColor} size={hp('2.5%')} />
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
                  <Icons
                    name="check-circle"
                    color={Colors.GREEN}
                    size={hp('2.5%')}
                  />
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
                  colors={[Colors.WHITE, Colors.LIGHTGREY]}
                  style={styles.buttonChoose}>
                  <Text style={styles.textChoose}>Choose Image</Text>
                </LinearGradient>
              </TouchableOpacity>
              {this.state.photo == null ? (
                <Text
                  style={[
                    styles.textChoose,
                    {
                      marginLeft: -wp('7.5%'),
                      alignSelf: 'flex-end',
                      marginBottom: hp('0.625%'),
                    },
                  ]}>
                  No photo selected
                </Text>
              ) : null}
              {this.state.photo != '' ? (
                <Animatable.View animation="bounceIn" useNativeDriver={true}>
                  <Icons
                    name="check-circle"
                    color={Colors.GREEN}
                    size={hp('2.5%')}
                  />
                </Animatable.View>
              ) : null}
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={this.handleClick}>
                <LinearGradient
                  colors={[Colors.LIGHTYELLOW, Colors.DARKYELLOW]}
                  style={styles.signIn}>
                  <Text style={[styles.textSign, {color: Colors.WHITE}]}>
                    Sign Up
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={[
                  styles.signIn,
                  {
                    borderWidth: 1,
                    marginTop: hp('1.875%'),
                    borderColor: Colors.GREEN,
                  },
                ]}>
                <Text style={[styles.textSign, {color: Colors.GREEN}]}>
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
    backgroundColor: Colors.GREEN,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: wp('5%'),
    paddingBottom: hp('6.25%'),
  },
  footer: {
    flex: 3,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('3.75%'),
  },
  text_header: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: hp('3.75%'),
  },
  text_footer: {
    color: Colors.InputTextColor,
    fontSize: hp('2.25%'),
  },
  action: {
    flexDirection: 'row',
    marginTop: hp('1.25%'),
    borderBottomWidth: 1,
    borderBottomColor: Colors.GREY,
    paddingBottom: hp('0.625%'),
  },
  actionError: {
    flexDirection: 'row',
    marginTop: hp('1.25%'),
    borderBottomWidth: 1,
    borderBottomColor: Colors.RED,
    paddingBottom: hp('0.625%'),
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -hp('1.5%'),
    paddingLeft: wp('2.5%'),
    color: Colors.InputTextColor,
  },
  errorMsg: {
    color: Colors.RED,
    fontSize: hp('1.75%'),
  },
  button: {
    alignItems: 'center',
    marginTop: hp('6.25%'),
  },
  signIn: {
    width: '100%',
    height: hp('6.25%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: hp('2.25%'),
    fontWeight: 'bold',
  },
  buttonChooseView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: hp('6.25%'),
    marginTop: hp('6.25%'),
    color: Colors.InputTextColor,
  },
  buttonChoose: {
    width: '120%',
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.choosePicButtonColor,
  },

  textChoose: {
    fontSize: hp('2%'),
  },
});
