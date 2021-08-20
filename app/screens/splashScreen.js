import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Icons from 'react-native-vector-icons/MaterialIcons';

import {Colors} from '../style/colors/colors';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          useNativeDriver={true}
          animation={'bounceIn'}
          duration={1500}
          source={require('../assets/neoscrum.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={styles.footer}
        animation="fadeInUpBig"
        useNativeDriver={true}>
        <Text style={styles.title}>Get your feedbacks!</Text>

        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <LinearGradient
              colors={[Colors.LIGHTYELLOW, Colors.DARKYELLOW]}
              style={styles.signIn}>
              <Text style={styles.textSign}>Get Started</Text>
              <Icons
                name="navigate-next"
                color={Colors.WHITE}
                size={hp('2.5%')}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.35;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GREEN,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: hp('6.25%'),
    paddingHorizontal: wp('7.5%'),
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: Colors.InputTextColor,
    fontSize: hp('3.75%'),
    fontWeight: 'bold',
  },
  text: {
    color: Colors.GREY,
    marginTop: hp('0.625%'),
  },
  button: {
    alignItems: 'flex-end',
    marginTop: hp('3.75%'),
  },
  signIn: {
    width: wp('37.5%'),
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
});
