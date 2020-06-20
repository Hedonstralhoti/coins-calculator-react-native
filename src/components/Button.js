import React from 'react'
import {  View, Text, TouchableHighlight } from 'react-native'
import Style from '../style/Style';

export default props => {
    return(
        <TouchableHighlight style={Style.buttonsBackground} onPress={props.onClick}>
            <Text style={Style.buttonsFont}>{props.label}</Text>
        </TouchableHighlight>
    )
        
    
}