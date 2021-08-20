import React from 'react';

import {StyleSheet, Platform, FlatList, SafeAreaView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';

import GiveFeedbackComp from '../components/giveFeedbackComp';
import {apiService} from '../libs/apiCall';
import {Colors} from '../style/colors/colors';

class AddFeedbackScreen extends React.Component {
  onResponse = (res) => {
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
          backgroundColor: Colors.WHITE,
          alignItems: 'center',
        }}>
        <FlatList
          // showsHorizontalScrollIndicator={true}
          keyExtractor={(item) => item.email}
          data={this.state.user}
          renderItem={renderItem}
          style={{marginVertical: hp('6.25%')}}
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

    backgroundColor: Colors.GREEN,

    alignItems: 'center',
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
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '20%',
    backgroundColor: Colors.GREEN,
    borderRightWidth: 1,
    borderColor: Colors.DARKGREEN,
  },
});
