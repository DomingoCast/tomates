import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';

import Clock from '../../components/Clock/Clock'
import Boton from '../../components/Boton/Boton'
//Boton/

const Timer = (props) => {
    const [time, setTime] = useState(0)
    const [timeInter, setTimeInter] = useState(1000)
    const [run, setRun] = useState(false)
    const [goal, setGoal] = useState(.0001*60*1000)
    const [interval, setTheInterval] = useState(null)
    const [clockType, setClockType] = useState('timer')

    useEffect(() => {
        //setTheTime(time)
        console.log('[EFFECT]', time, run, goal)
        if(time === goal){
            handleClockType()
            setTime(0)
        }
    }, [time])

    const runClock = () => {
        setRun(true)
        setTheInterval(setInterval(passTime, timeInter))
    }
    
    const passTime = () => {
        setTime(time => time + 1)
        console.log('[PASS]', time)
    }

    const stopClock = () => {
        setRun(false)
        clearInterval(interval)
        console.log('[STOP]', interval)
    }

    const handleClockType = () => {
        clockType === 'timer' ? setClockType('stopWatch') : setClockType('timer')
    }

    return (
        <View>
            <Clock goal={goal} run={run} time={time} type={clockType}/>
            <Boton click={runClock} text="run"/>
            <Boton click={stopClock} text="stop"/>
        </View>
        
    )
}

export default Timer
