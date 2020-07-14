import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';
import {getAllCategories} from '../redux/actions/CategoryAction';
import {getAllServices} from '../redux/actions/ServiceAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {googleLogin} from '../redux/actions/GoogleAction';
import {imgPicker} from '../redux/actions/ImageAction';

class SecondScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category_listing: [],
      service_listing: [],
    };
  }
  componentDidMount = () => {
    //this.props.actions.getAllServices();
  };
  render() {
    // if (!this.props.service_listing.data) {
    //   return (
    //     <View style={styles.container}>
    //       {/*Code to show Activity Indicator*/}
    //       <ActivityIndicator size="large" color="#0000ff" />
    //       {/*Size can be large/ small*/}
    //     </View>
    //   );
    // } else {
    return (
      <View>
        <Text>SecondScreen</Text>
        <Button
          title="Go to Third"
          onPress={() => this.props.navigation.navigate('Third')}
        />
        {/* <Text>{this.props.category_listing.data.categories[0].name}</Text>
          <Text>{this.props.category_listing.data.categories[0].id}</Text>
          <Text>{this.props.category_listing.data.categories[1].id}</Text>
          <Text>{this.props.category_listing.data.categories[2].id}</Text>
          <Text>{this.props.service_listing.data.services[0].id}</Text>
          <Text>{this.props.service_listing.data.services[0].name}</Text>
          <Text>
            {this.props.service_listing.data.services[0].sub_services[0].name}
          </Text> */}
        <Text>{this.props.profile.name}</Text>
        <Text>{this.props.profile.email}</Text>
        <Image
          source={{uri: this.props.profile.photo}}
          style={{width: 50, height: 50}}
        />
        <Image
          source={{uri: this.props.uriData.imgUri}}
          style={{width: 30, height: 30, margin: 30}}
        />
      </View>
    );
  }
  //}
}

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
        getAllServices,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  {googleLogin, imgPicker},
)(SecondScreen);

const styles = StyleSheet.create({});
