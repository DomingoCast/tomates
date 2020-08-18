import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, Text, View } from 'react-native';
import Clock from '../../components/Clock/Clock'
import Boton from '../../components/Boton/Boton'
import Centerer from '../../hoc/Centerer/Centerer'
//Centerer/
import Play from '../../../assets/svg/play-button.svg'
import Stop from '../../../assets/svg/stop.svg'
import Pause from '../../../assets/svg/pause.svg'

import { Audio, Video } from 'expo-av'

const Timer = (props) => {
    const [time, setTime] = useState(0)
    const [extra, setExtra] = useState(0)
    const [timeInter, setTimeInter] = useState(1000)
    const [run, setRun] = useState(false)
    const [goal, setGoal] = useState(6)
    const [interval, setTheInterval] = useState(null)
    const [clockType, setClockType] = useState('timer')

    useEffect(() => {
        //setTheTime(time)
        //console.log('[EFFECT]', time, run, goal)
        if(time === goal && clockType==='timer'){
            alarm()
            handleClockType()
            setTime(0)
        }
    }, [time])

    const runClock = () => {
        setRun(true)
        setTheInterval(setInterval(passTime, timeInter))
    }

    const alarm = async () => {
        console.log('[PREPARED?]')
        const soundObject = new Audio.Sound();

        try {
          await soundObject.loadAsync(require('../../../assets/sounds/gong.mp3'));
          await soundObject.playAsync();
          // Your sound is playing!
          await console.log('[PLAYING]')
          // Don't forget to unload the sound from memory
          // when you are done using the Sound object
          setTimeout(async () => await soundObject.unloadAsync(), 6000)
          
        } catch (error) {
          // An error occurred!
        }
    }
    
    const passTime = () => {
        setTime(time => time + 1)
        if( clockType !== "timer" ){
            setExtra(extra => extra + 1)
        }
        //console.log('[PASS]', time)
    }

    const stopClock = () => {
        if( !run  ){
            props.scrollIt()
            props.saveData(time, extra)
        } else {
            setRun(false)
            setTime(0)
            clearInterval(interval)
            //console.log('[STOP]', interval)
        }
    }

    const handleClockType = () => {
        clockType === 'timer' ? setClockType('stopWatch') : setClockType('timer')
    }

    return (
        <View style={styles.container}>
            <Clock goal={goal} run={run} time={time} type={clockType}>
                <Centerer>
                    <Boton styling={run ? styles.hidden : styles.start} click={runClock} text="run">
                        <Play height={100} width={100}  />
                    </Boton>
                </Centerer>
            </Clock>
            <Boton styling={styles.stop} click={stopClock} text="stop">
                <Centerer>
        {run ? <Pause height={36} width={36} /> : <Stop height={36} width={36} />}
                </Centerer>
            </Boton>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        //position: 'relative',
        paddingTop:'30%',
        paddingBottom:'5%',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    start: {
        color: 'white',
        //borderWidth: 3,
        height: 100,
        width: 100,
        //marginTop: -80,
        //marginLeft: -40

    },
    hidden: {
        display: 'none'
    },
    stop: {
        backgroundColor: '#A51B02',
        width: 70,
        height: 70,
        position: 'relative',
        borderRadius: 100,
        
    }
})

export default Timer
