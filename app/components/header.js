import React from 'react';

import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Avatar} from 'react-native-paper';
import {connect} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
        <Text style={styles.headerText}>
          {/* getting name from the redux store */}
          {props?.user?.username}
          {/* {props?.route?.params?.name || ''} */}
        </Text>
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
    backgroundColor: '#009387',
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: hp('2.5%'),
    color: '#ffff',
    letterSpacing: 1,
  },
  usernameStyle: {
    // marginLeft: 10,
  },
});
