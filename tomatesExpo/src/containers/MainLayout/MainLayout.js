import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Timer from '../Timer/Timer'
//Timer/
import Scroller from '../../components/Scroller/Scroller'

import { getData, storeData } from '../../util/localStorage'


const MainLayout = (props) => {
    const [key, setKey] = useState('rojo')
    const [goal, setGoal] = useState(3)
    const [dScroller, setDS] = useState(false)
    const [nTomatoes, setNT] = useState(0)
    const [time, setTime] = useState(0)
    //const [nTomatoes, setNT] = useState(3)
    //const [time, setTime] = useState(3*25*60 + 3*60 + 23)
    
    useEffect( () => {
        (async () => {
            const data = await getData(key)
            console.log('[MJ]', data)
            if (data) {
                if (data.date === new Date().toDateString()){
                    setNT(data.nTomatoes)
                    setTime(data.time)
                } else {
                    const global = await getData('global')
                    if (global){
                        const newGlobal = {
                            ...global,
                        }
                        newGlobal[data.time] = {...data}
                        storeData('global', newGlobal)
                    }
                }
            }
        })()
    }, [])

    useEffect(() => {
        storeData(key, {date: new Date().toDateString(), time: time, nTomatoes: nTomatoes})
    }, [time, nTomatoes])

    const scrollIt = () => {
        dScroller ? setDS(false) : setDS(true)
    }

    const saveData = (nTs, tEx) => {
        setTime(time => time + tEx + nTs * goal)
        setNT(nTomatoes => nTomatoes + nTs)
    }

    return (
        <View style={styles.container}>
            <Timer scrollIt={scrollIt} saveData={(nTs, tEx) => saveData(nTs, tEx)}/>
            <Scroller 
                nTomatoes={nTomatoes} 
                time={time} 
                extra={time - (nTomatoes*25*60)} 
                display={dScroller}
                scrollIt={scrollIt}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
    },
})

export default MainLayout
