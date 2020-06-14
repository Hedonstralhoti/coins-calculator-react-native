/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';
import Style from './Style';

export default app = () => {
  return(
    <View style={ Style.container }>
      <View style={ Style.displayBackground }>

        <View style={ Style.displays }>
          <Text>oi</Text>
        </View>

        <View style={ Style.displays }>
          <Text>alo</Text>
        </View>
      </View>

      <View style={ Style.bodyBackground }>
        <View style={ Style.inputs }>
          <Text>oi</Text>
        </View>

        <View style={ Style.buttonsBody }>
          <View style={Style.buttonsBackground} >
            <TouchableOpacity style={Style.buttons}>
                <Text style={Style.buttonsFont}>AC</Text>
            </TouchableOpacity>
          </View>

          <View style={Style.buttonsBackground} >
          <TouchableOpacity style={Style.buttons}>
                <Text style={Style.buttonsFont}>=</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  );
}







