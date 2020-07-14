import React, {useState} from 'react';
import {View, Button, Text, Image, ActivityIndicator} from 'react-native';
import {GoogleSignin} from '@react-native-community/google-signin';
import {connect} from 'react-redux';
import {googleLogin} from '../redux/actions/GoogleAction';

GoogleSignin.configure({
  webClientId:
    '603483881765-46nhml4dtpr8qguuak4h6t32tsufoitf.apps.googleusercontent.com',
  offlineAccess: true,
  forceCodeForRefreshToken: true,
});

const ThirdScreen = props => {
  //   const [info, setInfo] = useState({user: {}});
  const google = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      //console.log(userInfo);
      //setInfo(userInfo);
      props.googleLogin(userInfo);
      props.navigation.navigate('First');
    } catch (error) {
      console.log(error);
      console.log(error.code);
    }
  };
  if (!props.profile) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/*Code to show Activity Indicator*/}
        <ActivityIndicator size="large" color="#0000ff" />
        {/*Size can be large/ small*/}
      </View>
    );
  } else {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>TEST</Text>
        <Button title="Login With Google" onPress={() => google()} />
        {/* <Text>{props.profile.name}</Text>
        <Text>{props.profile.email}</Text>
        <Image
          source={{uri: props.profile.photo}}
          style={{width: 50, height: 50}}
        /> */}
        <Button
          title="Go to Fourth"
          onPress={() => props.navigation.navigate('Fourth')}
        />
      </View>
    );
  }
};

const mapStateToProps = state => {
  //   const {userInfo} = state.login;
  const profile = state.login.userinfo;
  console.log('*********123123132*****', profile);
  return {profile};
};

export default connect(
  mapStateToProps,
  {googleLogin},
)(ThirdScreen);
