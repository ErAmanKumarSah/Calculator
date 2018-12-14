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
    this.state={
      resultText: '',
      calculationsText: ''
    }
    this.operations = ['+', '-', '*', '/', '<']
  }

  calculateResult(){
    const text = this.state.resultText
    //console.log(eval(text))
    this.setState({
      calculationsText: eval(text)
    })
  }

  buttonPressed(text) {
    console.log(text);
    if(text== '=') {
      return this.calculateResult()
    }
    this.setState({
      resultText: this.state.resultText+text
    })
  }

  operate(operation) {
    switch(operation) {
      case '<':
        const text = this.state.resultText.split('')
        text.pop()
        this.setState({
          resultText: text.join('')
        })
        break
      case '+':
      case '-':
      case '*':
      case '/':
      

        const lastChar = this.state.resultText.split('').pop()
        if(this.operations.indexOf(lastChar) > 0) return
        if(this.state.text == "") return
          this.setState({
            resultText: this.state.resultText + operation
        })
    }
  }

  render() {
    const rows = []
    const nums = [[1,2,3], [4,5,6], [7,8,9], ['.',0,'=']]

    for(let i=0; i<4; i++) {
      const row =[]
      for(let j=0; j<3; j++) {
        row.push(
          <TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}>
            <Text style={styles.btntext}>{nums[i][j]}</Text>
          </TouchableOpacity>
          )
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }

    const ops = []
    for(let i=0; i<5; i++) {
      ops.push(
        <TouchableOpacity style={styles.btn} onPress={() => this.operate(this.operations[i])}>
          <Text style={[styles.btntext, styles.white]}>{this.operations[i]}</Text>
        </TouchableOpacity>
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationsText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
            {/* <View style={styles.row}>
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
            </View> */}
          </View>

          <View style={styles.operations}>
            {ops}
            {/* <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>+</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>-</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>*</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>/</Text></TouchableOpacity> */}
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
    fontSize: 36,
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
    backgroundColor: '#cccccc'
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
