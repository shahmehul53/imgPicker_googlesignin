import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class Screen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f1eded'}}>
        <View style={{alignItems: 'center'}}>
          <View
            style={[styles.parentView, {flexDirection: 'row', marginTop: 20}]}>
            <Image
              style={styles.image}
              source={require('../Images/bottle.jpg')}
            />

            <View style={{marginLeft: 20}}>
              <Text style={styles.title}>Product 1</Text>
              <Text style={{color: '#aaa5a5'}}>Type</Text>
              <Text style={[styles.title, {marginTop: 5}]}>$340</Text>
            </View>

            <View
              style={{
                alignItems: 'flex-end',
                flexDirection: 'row',
                marginLeft: 50,
              }}>
              <Text style={styles.text}>+</Text>
              <Text style={styles.text}>03</Text>
              <Text style={styles.text}>-</Text>
            </View>
          </View>

          <View
            style={[styles.parentView, {flexDirection: 'row', marginTop: 10}]}>
            <Image
              style={styles.image}
              source={require('../Images/bottle.jpg')}
            />

            <View style={{marginLeft: 20}}>
              <Text style={styles.title}>Product 1</Text>
              <Text style={{color: '#aaa5a5'}}>Type</Text>
              <Text style={[styles.title, {marginTop: 5}]}>$240</Text>
            </View>

            <View
              style={{
                alignItems: 'flex-end',
                flexDirection: 'row',
                marginLeft: 50,
              }}>
              <Text style={styles.text}>+</Text>
              <Text style={styles.text}>02</Text>
              <Text style={styles.text}>-</Text>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={styles.parentView}>
            <View style={styles.childView}>
              <Text style={{color: '#aaa5a5', fontSize: 16}}>Your Cart</Text>
              <Text style={{color: '#aaa5a5', fontSize: 16, marginTop: 5}}>
                Amount
              </Text>
            </View>

            <View style={[styles.childView, {marginTop: 15}]}>
              <Text style={styles.childText}>Product 1</Text>
              <Text style={styles.childText}>$640</Text>
            </View>
            <View
              style={[
                styles.childView,
                {
                  borderBottomWidth: 0.3,
                  paddingBottom: 7,
                  borderBottomColor: '#aaa5a5',
                },
              ]}>
              <Text style={styles.childText}>Product 2</Text>
              <Text style={styles.childText}>$240</Text>
            </View>

            <View style={styles.childView}>
              <Text style={styles.childText}>Taxes</Text>
              <Text style={styles.childText}>$30</Text>
            </View>
            <View
              style={[
                styles.childView,
                {
                  borderBottomWidth: 0.3,
                  paddingBottom: 7,
                  borderBottomColor: '#aaa5a5',
                },
              ]}>
              <Text style={styles.childText}>Delivery Charges</Text>
              <Text style={styles.childText}>$10</Text>
            </View>

            <View style={[styles.childView, {marginTop: 25}]}>
              <Text style={[styles.childText, {color: '#c22020'}]}>
                Apply Coupon
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.childText}> Sub Total </Text>
                <Text style={[styles.childText, {marginLeft: 5}]}> $960</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.buttonBackground}>
            <Text style={styles.buttonText}>PROCESS</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Screen;
const styles = StyleSheet.create({
  parentView: {
    height: 'auto',
    width: '95%',
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  buttonText: {
    color: '#fff',
    paddingTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonBackground: {
    width: '95%',
    height: 45,
    borderRadius: 18,
    marginTop: 20,
    backgroundColor: '#29af9d',
    alignItems: 'center',
  },
  image: {
    height: 75,
    width: 60,
  },
  title: {
    color: '#6c6161',
    fontSize: 16,
  },
  text: {
    color: '#6c6161',
    fontSize: 16,
    borderWidth: 0.3,
    padding: 5,
    paddingLeft: 7,
    paddingRight: 7,
  },
  childView: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  childText: {
    fontSize: 16,
  },
});
