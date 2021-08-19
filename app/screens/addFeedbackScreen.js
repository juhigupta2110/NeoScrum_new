import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  FlatList,
  ImageBackground,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Icons from 'react-native-vector-icons/Feather';
import IconsFeather from 'react-native-vector-icons/FontAwesome';
import {
  Appbar,
  Card,
  Title,
  Paragraph,
  Provider as PaperProvider,
} from 'react-native-paper';
import {connect} from 'react-redux';
import axios from 'axios';

import Footer from '../components/footer';
import GiveFeedbackComp from '../components/giveFeedbackComp';
import {apiService} from '../libs/apiCall';

class AddFeedbackScreen extends React.Component {
  onResponse = (res) => {
    console.log('inside addFeedback .....');
    console.log(res);

    this.setState({
      user: res?.data,
      token: this.props?.route?.params?.token || '',
    });
  };

  constructor(props) {
    super(props);

    this.state = {
      user: [],
      token: '',
    };

    let data = {
      token: this.props?.token || '',
    };

    apiService.getUsers(data, this.onResponse, 'post');
  }

  onResponse = (res) => {
    console.log('inside addFeedback .....');
    console.log(res);

    if (res.status === 200) {
      this.setState({
        user: res?.data,
        token: res?.token || '',
      });
    } else alert('Something went wrong ...try again');
  };

  render() {
    const renderItem = ({item}) => (
      <GiveFeedbackComp
        photo={item?.profile}
        name={item?.name}
        email={item?.email}
        token={this.state?.token}
      />
    );

    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
        }}>
        <FlatList
          // showsHorizontalScrollIndicator={true}
          keyExtractor={(item) => item.email}
          data={this.state.user}
          renderItem={renderItem}
          style={{marginVertical: 50}}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state insdie mapstate...', state);
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(AddFeedbackScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#009387',

    alignItems: 'center',
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
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '20%',
    backgroundColor: '#009387',
    borderRightWidth: 1,
    borderColor: 'darkgreen',
  },
});
