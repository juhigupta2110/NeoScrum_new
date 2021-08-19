import {StyleSheet} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {colors} from '../colors/colors';

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
    borderBottomColor: colors.grey,
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
    borderColor: colors.grey,
    borderRadius: 2,
    marginRight: wp('1%'),
  },
  chooseTextStyle: {
    color: colors.black,
    fontSize: 16,
  },
  submitButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('25%'),
    height: hp('5%'),
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 5,
    marginLeft: wp('15%'),
    marginTop: hp('3%'),
    alignSelf: 'flex-start',
    backgroundColor: colors.blue,
  },
  submitTextStyle: {
    color: colors.white,
    fontSize: 16,
  },

  registerHereStyle: {
    alignSelf: 'flex-end',
    marginRight: wp('10%'),
    marginTop: hp('5%'),
  },

  registerHereTextStyle: {
    color: colors.orange,
    fontSize: 15,
  },
  errorInputViewStyle: {
    alignSelf: 'flex-start',
    marginLeft: wp('10%'),
  },
  errorFormInputStyle: {
    color: colors.red,
  },
});
