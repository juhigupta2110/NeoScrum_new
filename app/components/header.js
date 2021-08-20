import React from 'react';

import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Avatar} from 'react-native-paper';
import {connect} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Colors} from '../style/colors/colors';

const Header = (props) => {
  console.log('inside header props...');
  console.log(props);
  return (
    <SafeAreaView style={styles.header}>
      <Avatar.Image
        size={hp('7.5%')}
        source={require('../assets/pic3.png')}
        style={{marginHorizontal: wp('2.5%')}}
      />
      <View style={styles.usernameStyle}>
        <Text style={styles.headerText}>{props?.user?.username}</Text>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

export default connect(mapStateToProps)(Header);

const styles = StyleSheet.create({
  header: {
    height: hp('15%'),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.GREEN,
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: hp('2.5%'),
    color: Colors.WHITE,
    letterSpacing: 1,
  },
  usernameStyle: {},
});
