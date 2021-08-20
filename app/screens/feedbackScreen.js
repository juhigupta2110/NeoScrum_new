import React from 'react';

import {View, StyleSheet, Platform, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';

import FeedbackViewComp from '../components/feedbackViewComp';
import {Colors} from '../style/colors/colors';

class FeedbackScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',
      feedbacks: [],
      name: '',
      photo: '',
    };
  }
  // getting data from the redux store :-
  componentDidMount() {
    this.setState({
      token: this.props.user.token,
      feedbacks: this.props.user.feedbacks,
      name: this.props.user.name,
      photo: this.props.user.photo,
    });
  }

  renderItem = ({item}) => (
    <FeedbackViewComp
      name={item.name}
      feedback={item.feadback}
      date={item.date}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {this.state.feedbacks.length == 0 ? (
          <FeedbackViewComp
            name={this.state.name}
            feedback={this.state.feedbacks}
            date={this.state.date}
          />
        ) : (
          <FlatList
            //horizontal={true}
            legacyImplementation={false}
            showsHorizontalScrollIndicator={true}
            keyExtractor={(item) => item._id}
            data={this.state.feedbacks}
            renderItem={this.renderItem}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

export default connect(mapStateToProps)(FeedbackScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.GREEN,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: wp('5%'),
    paddingBottom: hp('6.25%'),
  },
  footer: {
    flex: 3,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('3.75%'),
  },
  text_header: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: hp('3.75%'),
  },
  text_footer: {
    color: Colors.InputTextColor,
    fontSize: hp('2.25%'),
  },
  action: {
    flexDirection: 'row',
    marginTop: hp('1.25%'),
    borderBottomWidth: 1,
    borderBottomColor: Colors.GREY,
    paddingBottom: hp('0.625%'),
  },
  actionError: {
    flexDirection: 'row',
    marginTop: hp('1.25%'),
    borderBottomWidth: 1,
    borderBottomColor: Colors.RED,
    paddingBottom: hp('0.625%'),
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -hp('1.5%'),
    paddingLeft: wp('2.5%'),
    color: Colors.InputTextColor,
  },
  errorMsg: {
    color: Colors.RED,
    fontSize: hp('1.75%'),
  },
  button: {
    alignItems: 'center',
    marginTop: hp('6.25%'),
  },
  signIn: {
    width: '100%',
    height: hp('6.25%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: hp('2.25%'),
    fontWeight: 'bold',
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '20%',
    backgroundColor: Colors.GREEN,
    borderRightWidth: 1,
    borderColor: Colors.DARKGREEN,
  },
});
