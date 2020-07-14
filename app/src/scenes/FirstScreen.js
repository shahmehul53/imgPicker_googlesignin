import React, {useEffect, Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';
import {getAllCategories} from '../redux/actions/CategoryAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {googleLogin} from '../redux/actions/GoogleAction';
import {imgPicker} from '../redux/actions/ImageAction';

class FirstScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category_listing: [],
    };
  }

  //   var requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow',
  //   };

  //   useEffect(() => {
  //     // fetch('http://18.233.252.69/api/v1/categories', requestOptions)
  //     //   .then(response => response.json())
  //     //   .then(result => console.log(result))
  //     //   .catch(error => console.log('error', error));
  //     this.props.actions.getAllCategories();
  //   }, []);

  componentDidMount = () => {
    //this.props.actions.getAllCategories();
    //this.props.actions.googleLogin;
    console.log('***profile**', this.props.profile);
    console.log('IMG', this.props.uriData);
  };

  render() {
    console.log('first Render', this.props.uriData, this.props.profile);
    if (!this.props.uriData) {
      return (
        <View style={styles.container}>
          {/*Code to show Activity Indicator*/}
          <ActivityIndicator size="large" color="#0000ff" />
          {/*Size can be large/ small*/}
        </View>
      );
    } else {
      return (
        <View>
          <Text>FirstScreen</Text>
          <Button
            title="Go to Second"
            onPress={() => this.props.navigation.navigate('Second')}
          />
          <Text>{this.props.profile.name}</Text>
          <Text>{this.props.profile.email}</Text>
          <Image
            source={{uri: this.props.profile.photo}}
            style={{width: 50, height: 50}}
          />
          <Image
            source={{uri: this.props.uriData.imgUri}}
            style={{width: 30, height: 30}}
          />
        </View>
      );
    }
  }
}

// const mapStateToProps = state => ({
//   // category_listing: state.categories.categoriesList,
//   // profile: state.login,
//   uriData: state.imgData,

//   // return profile
// });

const mapStateToProps = state => {
  //   const {userInfo} = state.login;
  const profile = state.login.userinfo;
  const uriData = state.imgdata;
  console.log('imgdata', uriData.imgUri, profile);
  return {uriData, profile};
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        getAllCategories,
        googleLogin,
        imgPicker,
      },
      dispatch,
    ),
  };
};
export default connect(
  mapStateToProps,
  {googleLogin, imgPicker},
)(FirstScreen);

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
