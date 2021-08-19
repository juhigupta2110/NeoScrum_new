import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Avatar} from 'react-native-paper';
import {connect} from 'react-redux';
import axios from 'axios';

const Footer = (props) => {
  console.log('inside footer props.route...');
  console.log(props.route);
  const handleLogout = () => {
    props.dispatch({
      type: 'LOGOUT',
      payload: {email: props.route.params.email},
    });
    alert('See you soon again ' + props.route.params.name);
    props.navigation.navigate('SplashScreen');
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={handleLogout} style={styles.footerView}>
        <View
          style={[
            styles.footerView,
            {borderRightWidth: 0.5, borderRightColor: '#212d21'},
          ]}>
          <Icon name="logout" color="white" size={30} />
          <View style={{marginLeft: 10}}>
            <Text style={styles.footerText}>Logout</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('AddFeedbackScreen', {
            token: props.route.params.token,
            email: props.route.params.email,
            name: props.route.params.name,
          })
        }
        style={styles.footerView}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="note-add" color="white" size={30} />
          <View style={{marginLeft: 10}}>
            <Text style={styles.footerText}>Add Feedback</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default connect()(Footer);

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: '8%',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#009387',
    paddingHorizontal: 10,
  },
  footerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footerText: {
    fontSize: 20,
    color: '#ffff',
  },
  usernameStyle: {
    marginLeft: 10,
  },
});
