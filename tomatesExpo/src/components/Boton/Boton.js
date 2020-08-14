import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native';

const boton = (props) => (
    <Button title={props.text} onPress={props.click}/>
)

export default boton
