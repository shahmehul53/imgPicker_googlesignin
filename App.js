import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import Routes from './app/src/Routes';
import store from './app/src/redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

// import React, {useState} from 'react';
// import {View, Button, Text, Image} from 'react-native';
// import {GoogleSignin} from '@react-native-community/google-signin';

// GoogleSignin.configure({
//   webClientId:
//     '603483881765-46nhml4dtpr8qguuak4h6t32tsufoitf.apps.googleusercontent.com',
//   offlineAccess: true,
//   forceCodeForRefreshToken: true,
// });

// export default (App = () => {
//   const [info, setInfo] = useState({user: {}});
//   const google = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       console.log(userInfo);
//       setInfo(userInfo);
//     } catch (error) {
//       console.log(error);
//       console.log(error.code);
//     }
//   };

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>TEST</Text>
//       <Button title="test" onPress={() => google()} />
//       <Text>{info.user.name}</Text>
//       <Text>{info.user.email}</Text>
//       <Image source={{uri: info.user.photo}} style={{width: 50, height: 50}} />
//     </View>
//   );
// });
