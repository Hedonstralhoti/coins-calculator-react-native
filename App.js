/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {  View, Text } from 'react-native';


export default app = () => {
  return(
    <View style={{
      flex:1,
      flexDirection: 'column',
      backgroundColor: '#424242'}}>
      <View style={{
        flex:1,
        marginTop: 5,
        flexDirection: 'row',
        backgroundColor: '#424242'
        }}>
        <View style={{width: '50%', padding: 4, marginRight: 1, backgroundColor: '#323232'}}><Text>oi</Text></View>
        <View style={{width: '50%', padding: 5, marginLeft: 1, backgroundColor: '#323232'}}><Text>alo</Text></View>
      </View>
      <View style={{
        flex:4,
        marginBottom: 5,
        marginTop: 5,
        flexDirection: 'row',
        backgroundColor: '#2C7FA8'
        }}>
        <View style={{width: '75%', padding: 4, marginRight: 1, backgroundColor: '#323232'}}><Text>oi</Text></View>
        <View style={{flex:1, width: '25%', marginLeft: 1, backgroundColor: '#2C7FA8', flexDirection: 'column'}}>
          <View style={{flex:3,marginBottom: 1,backgroundColor: '#323232'}}><Text>Ac</Text></View>
          <View style={{flex:3,marginTop: 1,backgroundColor: '#323232'}}><Text>=</Text></View>
        </View>
      </View>
    </View>
  );
}







