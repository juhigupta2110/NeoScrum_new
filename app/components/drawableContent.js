import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {connect} from 'react-redux';

class DrawableContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{backgroundColor: 'rgba(255,255,255,0.5)'}}>
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
  drawerItemStyle: {
    height: 30,
    backgroundColor: '#f9f6db',
    marginVertical: 10,
  },
  textStyle: {
    fontSize: 14,
    marginHorizontal: 10,
    color: '#f77c2a',
  },
});
