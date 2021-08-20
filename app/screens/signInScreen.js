import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
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
import {connect} from 'react-redux';
import axios from 'axios';
import LOGIN_URL from '../api/url';

import {apiService} from '../libs/apiCall';
import {globalStyles} from '../style/global/globalStyles';
import {Colors} from '../style/colors/colors';

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      eye: false,
      token: '',
      feedbacks: [],
      status: 0,
      response: null,
      name: '',
      emailValidate: true,
    };
  }

  handleValidEmail = (val) => {
    let emailChk =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailChk.test(val)) {
      this.setState({
        emailValidate: false,
      });
    } else this.setState({emailValidate: true});
  };

  handleEyeClick = () => {
    this.setState({
      eye: !this.state.eye,
    });
  };

  loginUser = (email, token, name, feedbacks) => {
    data = {email, token, name, feedbacks};

    this.props.loginNewUser(data);
  };

  onResponse = (res) => {
    console.log('inside sign In screen .....');
    console.log(res?.data?.UserLogin);

    if (res.status == 200) {
      this.loginUser(
        res.data.UserLogin.email,
        res.data.UserLogin.token,
        res.data.UserLogin.name,
        res.data.UserLogin.Feadbacks,
      );
      this.props.navigation.navigate('RootDrawerNav', {
        params: {
          token: res?.data?.UserLogin?.token || '',
          feedbacks: res?.data?.UserLogin?.Feadbacks || '',
          name: res?.data?.UserLogin?.name || '',
          email: res?.data?.UserLogin?.email || '',
        },
      });
    } else alert('Incorrect Login Credentials');
  };

  handleClick = async () => {
    let data = {
      email: this.state.email,
      password: this.state.password,
      // email: 'rohit.kp.pandey@gmail.com',
      // password: 'VVSyoI1nDW',
    };

    // const res = await this.props.loginAsync(data);

    // console.log('after const res....', res);

    // this.onResponse(res);

    apiService.signIn(data, this.onResponse, 'post');
  };

  checkStatus = () => {
    console.log('this is the state in sign in .....');
    console.log(this.state);
    if (this.state.status == 200) {
      this.loginUser(
        this.state.email,
        this.state.token,
        this.state.name,
        this.state.feedbacks,
      );
    } else alert('Incorrect Login Credentials');
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.container}>
          <StatusBar backgroundColor={Colors.GREEN} barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.text_header}>Welcome!</Text>
          </View>
          <Animatable.View
            animation="fadeInUpBig"
            style={styles.footer}
            useNativeDriver={true}>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
              <IconsFeather
                name="user-o"
                color={Colors.InputTextColor}
                size={hp('2.5%')}
              />
              <TextInput
                placeholder="Enter Email"
                style={styles.textInput}
                autoCapitalize="none"
                maxLength={30}
                autoCorrect={false}
                onEndEditing={(e) => this.handleValidEmail(e.nativeEvent.text)}
                onChangeText={(text) => {
                  this.setState({email: text});
                }}
              />
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
            </View>
            <Text style={[styles.text_footer, {marginTop: hp('4.375%')}]}>
              Password
            </Text>
            <View style={styles.action}>
              <Icons name="lock" color={Colors.IconColor} size={hp('2.5%')} />
              {this.state.eye ? (
                <TextInput
                  placeholder="Password"
                  style={styles.textInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(text) => {
                    this.setState({password: text});
                  }}
                />
              ) : (
                <TextInput
                  placeholder="Password"
                  style={styles.textInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  onChangeText={(text) => {
                    this.setState({password: text});
                  }}
                />
              )}

              {this.state.eye ? (
                <Icons
                  name="eye"
                  color="grey"
                  size={hp('2.5%')}
                  onPress={this.handleEyeClick}
                />
              ) : (
                <Icons
                  name="eye-off"
                  color="grey"
                  size={hp('2.5%')}
                  onPress={this.handleEyeClick}
                />
              )}
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => this.handleClick()}>
                {/*  */}
                <LinearGradient
                  colors={[Colors.LIGHTYELLOW, Colors.DARKYELLOW]}
                  style={styles.signIn}>
                  <Text style={[styles.textSign, {color: Colors.WHITE}]}>
                    Sign In
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignUpScreen')}
                style={[
                  styles.signIn,
                  {
                    borderWidth: 1,
                    marginTop: hp('1.875%'),
                    borderColor: Colors.GREEN,
                  },
                ]}>
                <Text style={[styles.textSign, {color: Colors.GREEN}]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // loginAsync: ({email, password}) =>
    //   dispatch({
    //     type: 'LOGIN_ASYNC',
    //     payload: {email: email, password: password},
    //   }),
    loginNewUser: ({email, token, name, feedbacks}) =>
      dispatch({
        type: 'LOGIN',
        payload: {email: email, token: token, name: name, feedbacks: feedbacks},
      }),
  };
};

export default connect(null, mapDispatchToProps)(SignInScreen);

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
    borderBottomColor: '#f2f2f2',
    paddingBottom: hp('0.625%'),
  },
  actionError: {
    flexDirection: 'row',
    marginTop: hp('1.25%'),
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: hp('0.625%'),
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -hp('1.5%'),
    paddingLeft: wp('2.5%'),
    color: Colors.InputTextColor,
  },
  errorMsg: {
    color: '#FF0000',
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
});
