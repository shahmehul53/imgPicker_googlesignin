import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Header} from 'native-base';

function AddCard() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.list}>
          <Image
            style={{
              width: 40,
              height: 80,
              marginTop: 5,
              marginBottom: 5,
              marginLeft: 20,
            }}
            source={require('../assets/71f01610-a97b-4df9-8449-ad5e1d683f73.jpeg')}
          />
        </View>
        <View style={styles.list}>
          <Image
            style={{
              width: 40,
              height: 80,
              marginTop: 5,
              marginBottom: 5,
              marginLeft: 20,
            }}
            source={require('../assets/71f01610-a97b-4df9-8449-ad5e1d683f73.jpeg')}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 30,
          borderBottom: 10,
        }}>
        <Text style={{fontSize: 15, color: '#d8e2dc'}}>Your Cart</Text>
        <Text style={{fontSize: 15, color: '#d8e2dc'}}>Amount</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 30,
        }}>
        <View>
          <Text style={{fontSize: 15, color: '#3d405b'}}>Product1</Text>
          <Text style={{fontSize: 15, color: '#3d405b'}}>Product2</Text>
        </View>
        <View>
          <Text style={{fontSize: 15, color: '#3d405b'}}>$680</Text>
          <Text style={{fontSize: 15, color: '#3d405b'}}>$240</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 30,
        }}>
        <View style={{marginLeft: 20}}>
          <Text style={{fontSize: 15, color: '#3d405b'}}>Taxes</Text>
          <Text style={{fontSize: 15, color: '#3d405b'}}>Delivery Charges</Text>
        </View>
        <View style={{marginRight: 25}}>
          <Text style={{fontSize: 15, color: '#3d405b'}}>$30</Text>
          <Text style={{fontSize: 15, color: '#3d405b'}}>$240</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 30,
        }}>
        <Text style={{color: 'red', marginLeft: 25}}>Apply Coupon</Text>
        <Text style={{fontSize: 15, color: '#d8e2dc', marginRight: 25}}>
          Sub Total $960
        </Text>
      </View>
      <View style={{marginTop: 10, padding: 20}}>
        <TouchableOpacity style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>PROCEED</Text>
        </TouchableOpacity>
        {/*<Button title="PROCEED" style={{color:'red'}}></Button>*/}
      </View>
    </View>
  );
}

export default AddCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: '40%',
    width: '90%',
    marginTop: 100,
    marginLeft: 20,
    flexDirection: 'column',
    backgroundColor: '#e5e5e5',
  },
  list: {
    height: '30%',
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
  },
  button: {
    position: 'absolute',
    backgroundColor: 'green',
    height: 1,
    right: 0,
    left: 0,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
