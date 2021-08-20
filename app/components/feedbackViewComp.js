import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../style/colors/colors';

const dimension = Dimensions.get('window');

const FeedbackViewComp = (item) => {
  console.log('name is ...');
  console.log(item);

  var rand = Math.round(Math.random(1, 5));
  var bg;

  switch (rand) {
    case 1:
      bg = Colors.HeaderColor1;
      break;

    case 2:
      bg = Colors.HeaderColor2;
      break;

    case 3:
      bg = Colors.HeaderColor3;
      break;

    case 4:
      bg = Colors.HeaderColor4;
      break;

    case 5:
      bg = Colors.HeaderColor5;
      break;

    default:
      bg = Colors.HeaderColor1;
      break;
  }

  return (
    <ImageBackground
      source={require('../assets/backgroundNew1.png')}
      resizeMode="cover"
      style={styles.imgBgStyle}>
      {item.feekback == [] ? (
        <View style={styles.mainComp}>
          <View style={styles.feedbackComp}>
            <Text style={styles.feedbackCompText}>No feedbacks available </Text>
          </View>
        </View>
      ) : (
        <View style={styles.mainComp}>
          <View style={[styles.headerStyle, {backgroundColor: bg}]}>
            <Text style={styles.feedbackTextStyle}>Feedbacks</Text>
            <Text style={styles.feedbackTextStyle}>in 6 hours</Text>
          </View>

          <View style={styles.feedbackComp}>
            <Text style={styles.feedbackCompText}>{item.feedback} </Text>
          </View>

          <View style={styles.nameComp}>
            <Text>{item.name}</Text>
            <Text>{item.date}</Text>
          </View>
        </View>
      )}
    </ImageBackground>
  );
};

export default FeedbackViewComp;

const styles = StyleSheet.create({
  imgBgStyle: {
    //flex: 1,
    height: dimension.height,
    width: dimension.width,
  },

  mainComp: {
    // flex: 1,
    width: '80%',
    height: '80%',
    borderWidth: 1,
    borderColor: Colors.GREY,
    marginHorizontal: wp('12.5%'),
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    alignSelf: 'center',
    marginTop: '10%',
    paddingHorizontal: wp('2.5%'),
  },
  headerStyle: {
    flexDirection: 'row',

    width: '90%',
    height: '10%',
    alignItems: 'center',
    marginVertical: hp('1.25%'),
    justifyContent: 'space-around',
    paddingHorizontal: wp('2.5%'),
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: hp('0.5%'),
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  feedbackComp: {
    width: '90%',
    height: '50%',
    borderWidth: 0.5,
    borderColor: Colors.GREY,
    marginVertical: hp('2.5%'),
    padding: wp('2.5%'),
  },
  feedbackCompText: {
    fontWeight: 'bold',
    fontSize: hp('5%'),
    color: Colors.GREY,
  },
  nameComp: {
    width: '90%',
    height: '10%',
    marginRight: '5%',
    borderColor: Colors.GREY,
    marginVertical: '20%',

    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  backgroundImage: {
    flex: 1,
  },
  feedbackTextStyle: {
    fontSize: hp('2%'),
  },
});
