import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  FlatList,
  ImageBackground,
  Image,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Icons from 'react-native-vector-icons/Feather';
import IconsFeather from 'react-native-vector-icons/FontAwesome';
import {
  Appbar,
  Card,
  Title,
  Paragraph,
  Provider as PaperProvider,
} from 'react-native-paper';
import {connect} from 'react-redux';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import FeedbackViewComp from '../components/feedbackViewComp';

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
    // console.log(
    //   'inside feedback screeen,route, component did mount.....' +
    //     this.props.route.params.token,
    // );

    console.log('looking at store from redux......');
    console.log(this.props.user);
    console.log('did u see store data? ...');

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
    console.log('store data.....');
    console.log(this.props.user);
    console.log('state.........', this.state);

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
  console.log('state insdie mapstate...', state);
  return {
    user: state,
  };
};

export default connect(mapStateToProps)(FeedbackScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '20%',
    backgroundColor: '#009387',
    borderRightWidth: 1,
    borderColor: 'darkgreen',
  },
});
