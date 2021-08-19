import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {Avatar} from 'react-native-paper';
import axios from 'axios';
import {apiService} from '../libs/apiCall';

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
          style={{height: 500, width: 350}}>
          <View style={styles.imageComp}>
            <Avatar.Image
              size={150}
              // source={{uri: `asset:/${this.props.photo}`}}
              source={require('../assets/pic8.jpeg')}
            />
            <Text style={styles.nameStyle}>{this.state.name}</Text>
          </View>

          <View style={{width: '90%', marginLeft: 20}}>
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
                  colors={['white', '#cccbc9']}
                  style={styles.signIn}>
                  <Text style={styles.textSign}>Submit</Text>
                </LinearGradient>
              ) : (
                <LinearGradient
                  colors={['#f7df80', '#e5bf27']}
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
    borderColor: 'grey',

    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 20,
  },
  imageComp: {
    width: '90%',
    height: '50%',
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedbackCompText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'grey',
    borderWidth: 1,
    borderColor: 'red',
  },
  nameStyle: {
    marginVertical: 10,
    color: 'black',
    fontSize: 18,
  },
  inputComp: {
    borderWidth: 0.5,
    borderColor: 'grey',

    height: '40%',
    backgroundColor: 'white',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },

  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 20,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  validationText: {
    color: 'grey',
    opacity: 0.8,
  },
  validationTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 2,
  },
});
