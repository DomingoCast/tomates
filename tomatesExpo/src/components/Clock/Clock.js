import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const clock = (props) => {
    const parseNumber = (n) => {
        return (("0" + Math.floor(n)).slice(-2))
    }
    const parseTime = () => {
        const time = props.type === 'timer' ? props.goal - props.time : props.time
        const div = 60*60//*100
        const hours = time/div
        const minutes = (hours%1)*60
        const seconds = (minutes%1)*60
        console.log('[CLOCK]', hours, minutes, seconds)
        const miliseconds = seconds%1
        return ({
            hours: parseNumber(hours),
            minutes: parseNumber(minutes),
            seconds: parseNumber(seconds),
            miliseconds: miliseconds
        })
    }

    const styledTime = () => {
        const parsed = parseTime()
        //console.log('[PARSED]', parsed)
        return (
            <View style={styles.time}>
                <Text style={styles.text}>{parsed.hours}</Text><Text style={styles.text}>{parsed.minutes}</Text><Text style={[styles.text, styles.seconds]}>{parsed.seconds}</Text>
            </View>
        )
    }
    return (
        <View style={styles.clock}>
        {styledTime()}
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
        justifyContent: "center"

    }
})

export default clock
