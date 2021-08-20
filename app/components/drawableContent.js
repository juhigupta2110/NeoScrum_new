import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {Colors} from '../style/colors/colors';

class DrawableContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainViewStyle}>
        <View style={styles.drawerItemStyle}>
          <Text
            style={styles.textStyle}
            onPress={() => this.props.navigation.navigate('FeedbackScreen')}>
            Dashboard
          </Text>
        </View>

        <View style={styles.drawerItemStyle}>
          <Text
            style={styles.textStyle}
            onPress={() => this.props.navigation.navigate('AddFeedbackScreen')}>
            Add Feedback
          </Text>
        </View>

        <View style={styles.drawerItemStyle}>
          <Text
            style={styles.textStyle}
            onPress={() => {
              this.props.logoutUser();
              this.props.navigation.navigate('SplashScreen');
            }}>
            Logout
          </Text>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () =>
      dispatch({
        type: 'LOGOUT',
      }),
  };
};

export default connect(null, mapDispatchToProps)(DrawableContent);

const styles = StyleSheet.create({
  mainViewStyle: {backgroundColor: 'rgba(255,255,255,0.5)'},
  drawerItemStyle: {
    height: hp('3.75%'),
    backgroundColor: Colors.drawerItemColor,
    marginVertical: hp('1.26%'),
  },
  textStyle: {
    fontSize: hp('1.75%'),
    marginHorizontal: wp('2.5%'),
    color: Colors.drawerItemTextColor,
  },
});
