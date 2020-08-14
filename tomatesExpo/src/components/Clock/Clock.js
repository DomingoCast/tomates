import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const clock = (props) => (
    <Text> {props.run ? (props.type === 'timer' ? props.goal-props.time : props.time): props.goal}</Text>
)

export default clock
