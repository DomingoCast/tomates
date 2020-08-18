import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import parseTime from '../../util/parseTime'

const data = (props) => {
    const styledTime = () => {
        const parsedTime = parseTime(props.time)
        return(
            `${parsedTime.hours}h ${parsedTime.minutes}' ${parsedTime.seconds}"`
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>n Tomatoes: {props.nTomatoes}</Text>
            <Text style={styles.text}>T.Time: {styledTime()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fontSize: 40,
    },
    text: {
        fontSize: 25
    }

})

export default data
