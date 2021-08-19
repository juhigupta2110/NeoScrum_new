import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import {Avatar} from 'react-native-paper';
import {connect} from 'react-redux';

const Header = (props) => {
  console.log('inside header props...');
  console.log(props);
  return (
    <SafeAreaView style={styles.header}>
      <Avatar.Image
        size={60}
        source={require('../assets/pic3.png')}
        style={{marginHorizontal: 10}}
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
    height: 120,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#009387',
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffff',
    letterSpacing: 1,
  },
  usernameStyle: {
    // marginLeft: 10,
  },
});
