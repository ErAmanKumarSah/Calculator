/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super();
    this.state={}
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.result}>
          <Text style={styles.resultText}>10+22</Text>
        </Text>
        <Text style={styles.calculation}>
        <Text style={styles.calculationText}>32</Text>
        </Text>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>1</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>2</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>3</Text></TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>4</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>5</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>6</Text></TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>7</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>8</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>9</Text></TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>.</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>0</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>=</Text></TouchableOpacity>
            </View>

          </View>
          <View style={styles.operations}>
            <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>+</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>-</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>*</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>/</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 32,
    color: 'white',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  calculationText: {
    fontSize: 24,
    color: 'white',
  },
  buttons: {
    color: 'red',
    flexDirection: 'row',
    flex: 7,
    backgroundColor: 'yellow',
  },
  numbers: {
    flex: 3,
    backgroundColor: 'gray'
  },
  operations: {
    color: 'red',
    justifyContent: 'space-around',
    flex: 1,
    backgroundColor: '#cccccc',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  btntext: {
    fontSize: 48,
  },
});
