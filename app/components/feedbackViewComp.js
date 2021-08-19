import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Avatar} from 'react-native-paper';

const dimension = Dimensions.get('window');

const FeedbackViewComp = (item) => {
  console.log('name is ...');
  console.log(item);

  var rand = Math.round(Math.random(1, 5));
  var bg;

  switch (rand) {
    case 1:
      bg = '#f7ea85';
      break;

    case 2:
      bg = '#fb3f9f4';
      break;

    case 3:
      bg = '#f7c58f';
      break;

    case 4:
      bg = '#7badf7';
      break;

    case 5:
      bg = '#f490ae';
      break;

    default:
      bg = '#f490ae';
      break;
  }

  console.log('value of bg is ....' + bg);

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
            <Text style={{fontSize: 16}}>Feedbacks</Text>
            <Text style={{fontSize: 16}}>in 6 hours</Text>
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
    borderColor: 'grey',
    marginHorizontal: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: '10%',
    paddingHorizontal: 10,
  },
  headerStyle: {
    flexDirection: 'row',

    width: '90%',
    height: '10%',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  feedbackComp: {
    width: '90%',
    height: '50%',
    borderWidth: 0.5,
    borderColor: 'grey',
    marginVertical: 20,
    padding: 10,
  },
  feedbackCompText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'grey',
  },
  nameComp: {
    width: '90%',
    height: '10%',
    marginRight: '5%',
    borderColor: 'grey',
    marginVertical: '20%',

    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  backgroundImage: {
    flex: 1,
  },
});
