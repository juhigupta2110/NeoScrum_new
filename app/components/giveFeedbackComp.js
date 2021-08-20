import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar} from 'react-native-paper';

import {apiService} from '../libs/apiCall';
import {Colors} from '../style/colors/colors';

class GiveFeedbackComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feedback: '',
      email: this.props.email,
      name: this.props.name,
      token: this.props.token,
    };
  }

  onResponse = (res) => {
    console.log('inside sign In screen .....');
    console.log(res?.data?.UserLogin);

    if (res.status == 200) {
      alert('Feedback Submitted');
    } else alert('Feedback not submitted , try again');
  };

  handleOnClick = async () => {
    let data = {
      token: this.props.token,
      email: this.props.email,
      feadback: this.state.feedback,
    };

    apiService.giveFeedback(data, this.onResponse, 'post');
  };

  render() {
    return (
      <View style={styles.mainComp}>
        <ImageBackground
          source={require('../assets/backgroundNew1.png')}
          resizeMode="cover"
          style={styles.backgroundImgStyle}>
          <View style={styles.imageComp}>
            <Avatar.Image
              size={hp('18.75%')}
              // source={{uri: `asset:/${this.props.photo}`}}
              source={require('../assets/pic8.jpeg')}
            />
            <Text style={styles.nameStyle}>{this.state.name}</Text>
          </View>

          <View style={styles.inputViewStyle}>
            <TextInput
              placeholder="Write your feedback here"
              style={styles.inputComp}
              onChangeText={(text) => {
                this.setState({feedback: text});
              }}
            />
            <View style={styles.validationTextView}>
              <Text style={styles.validationText}>Max 100 characters </Text>
              <Text style={styles.validationText}>
                {this.state.feedback.length}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => this.handleOnClick()}
              disabled={
                this.state.feedback.length == 0 ||
                this.state.feedback.length > 100
                  ? true
                  : false
              }>
              {this.state.feedback.length == 0 ||
              this.state.feedback.length > 100 ? (
                <LinearGradient
                  colors={[Colors.WHITE, Colors.DisabledButton]}
                  style={styles.signIn}>
                  <Text style={styles.textSign}>Submit</Text>
                </LinearGradient>
              ) : (
                <LinearGradient
                  colors={[
                    Colors.EnabledButtonGrad1,
                    Colors.EnabledButtonGrad2,
                  ]}
                  style={styles.signIn}>
                  <Text style={styles.textSign}>Submit</Text>
                </LinearGradient>
              )}
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default GiveFeedbackComp;

const styles = StyleSheet.create({
  mainComp: {
    flex: 1,

    borderWidth: 0.5,
    borderColor: Colors.GREY,

    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    marginVertical: hp('2.5%'),
  },
  imageComp: {
    width: '90%',
    height: '50%',
    marginTop: hp('1.25%'),
    padding: wp('2.5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedbackCompText: {
    fontWeight: 'bold',
    fontSize: hp('2.5%'),
    color: Colors.GREY,
    borderWidth: 1,
    borderColor: Colors.RED,
  },
  inputViewStyle: {width: '90%', marginLeft: wp('5%')},
  nameStyle: {
    marginVertical: hp('1.25%'),
    color: Colors.BLACK,
    fontSize: hp('2.25%'),
  },
  inputComp: {
    borderWidth: 0.5,
    borderColor: Colors.GREY,

    height: '40%',
    backgroundColor: Colors.WHITE,
  },
  textSign: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: hp('2%'),
    letterSpacing: 1,
  },

  signIn: {
    width: wp('37.5%'),
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: hp('2.5%'),
    borderWidth: 0.5,
    borderColor: Colors.GREY,
  },
  validationText: {
    color: Colors.GREY,
    opacity: 0.8,
  },
  validationTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('0.5%'),
  },
  backgroundImgStyle: {height: hp('100%'), width: wp('87.5%')},
});
