import React from 'react'
import { StyleSheet, Text, Button,TouchableOpacity,  View } from 'react-native';

    //<Button style={props.styling} title={props.text} onPress={props.click}/>

        //<Text> {props.text}</Text>
const boton = (props) => (
    <TouchableOpacity  style={props.styling} onPress={props.click}>
        {props.children}
    </TouchableOpacity>
)

export default boton
