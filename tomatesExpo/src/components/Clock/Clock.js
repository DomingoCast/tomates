import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import parseTime from '../../util/parseTime'

const clock = (props) => {

    const styledTime = () => {
        const parsed = parseTime(props.type === 'timer' ? props.goal - props.time : props.time)
        //console.log('[PARSED]', parsed)
        return (
            <View style={[styles.time, (props.run ? null : styles.stoped)]}>
                <Text style={styles.text}>{parsed.hours}</Text><Text style={styles.text}>{parsed.minutes}</Text><Text style={[styles.text, styles.seconds]}>{parsed.seconds}</Text>
            </View>
        )
    }

    return (
        <View style={styles.clock}>
            {styledTime()}
            {props.children}
        </View>

    )
}

const styles = StyleSheet.create({
    time: {
        color: '#ffffff',
        fontSize: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    text: {
        color: '#ffffff',
        fontSize: 50,
        fontFamily: 'RudaRegular',
        letterSpacing: -50*0.03, paddingRight: 4
    },
    seconds: {
        paddingRight: 0,
        fontSize: 30,
        paddingBottom: 5
    },
    clock: {
        //width: Dimensions.get('window').width * 0.9,
        //height: Dimensions.get('window').width * 0.9,
        width: 350,
        height: 350,
        //borderRadius:Dimensions.get('window').width * 0.9 / 2,
        borderRadius: 175,
        backgroundColor: '#A51B02',
        justifyContent: "center",
        position: 'relative',
        //borderWidth: 3,

    },
    stoped: {
        opacity: .5
    },
})

export default clock
