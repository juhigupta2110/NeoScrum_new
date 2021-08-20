import {StyleSheet} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Colors} from '../colors/colors';

export const globalStyles = StyleSheet.create({
  formViewStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: hp('10%'),
  },
  formHeadingStyle: {
    fontSize: 25,
    fontWeight: '500',
  },
  textInputStyle: {
    marginTop: hp('5%'),
    width: wp('80%'),
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    fontSize: 20,
  },
  chooseViewStyle: {
    marginTop: hp('5%'),
    width: wp('80%'),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  chooseButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('35%'),
    height: hp('5%'),
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 2,
    marginRight: wp('1%'),
  },
  chooseTextStyle: {
    color: Colors.BLACK,
    fontSize: 16,
  },
  submitButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('25%'),
    height: hp('5%'),
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 5,
    marginLeft: wp('15%'),
    marginTop: hp('3%'),
    alignSelf: 'flex-start',
    backgroundColor: Colors.BLUE,
  },
  submitTextStyle: {
    color: Colors.WHITE,
    fontSize: 16,
  },

  registerHereStyle: {
    alignSelf: 'flex-end',
    marginRight: wp('10%'),
    marginTop: hp('5%'),
  },

  registerHereTextStyle: {
    color: Colors.ORANGE,
    fontSize: 15,
  },
  errorInputViewStyle: {
    alignSelf: 'flex-start',
    marginLeft: wp('10%'),
  },
  errorFormInputStyle: {
    color: Colors.RED,
  },
});
