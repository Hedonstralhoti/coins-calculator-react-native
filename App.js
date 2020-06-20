import React, { Component } from 'react';
import {  View, Text, TextInput } from 'react-native';
import Style from './src/style/Style';
import Button from './src/components/Button';
import Display from './src/components/Display';

export default class App extends Component {
  state = {
    displayValue: '0',
    playerValue: '',
    bidPlayer: '',
    valueClientBought: '',

  }
  render(){
  return(
    <View style={ Style.container }>
      <View style={ Style.displayBackground }>

        <View style={ Style.displays }>
          <Display value={this.state.displayValue}></Display>
        </View>

        
      </View>

      <View style={ Style.bodyBackground }>
        <View style={ Style.inputs }>

          <TextInput style={ Style.TextInput }
          placeholder='Valor do Jogador'
          value={this.state.playerValue}
          onChangeText={playerValue => this.setState({ playerValue })}/>

          <TextInput style={ Style.TextInput }
          placeholder='Valor do Bid'
          value={this.state.bidPlayer}
          onChangeText={bidPlayer => this.setState({ bidPlayer })}/>

          <TextInput style={ Style.TextInput }
          placeholder='Valor a Passar'
          value={this.state.valueClientBought}
          onChangeText={valueClientBought => this.setState({ valueClientBought })}/>
  
        </View>

        <View style={ Style.buttonsBody }>
          <View style={Style.buttonsBackground} >
            <Button label='AC' onClick={this.clearMemory}/>
          </View>

          <View style={Style.buttonsBackground} >
            <Button label='=' onClick={() => this.setOperation('=')} />
          </View>

        </View>
      </View>
    </View>
  );
  }
}







