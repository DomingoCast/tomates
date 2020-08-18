import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Timer from '../Timer/Timer'
//Timer/
import Scroller from '../../components/Scroller/Scroller'

const MainLayout = (props) => {
    const [dScroller, setDS] = useState(false)
    const [nTomatoes, setNT] = useState(3)
    const [time, setTime] = useState(3*25*60 + 3*60 + 23)
    

    const scrollIt = () => {
        dScroller ? setDS(false) : setDS(true)
    }

    const saveData = (newTime, newExtra) => {
        console.log('SAVING DATA')
        setTime(time => time + newTime)
        setNT(nTomatoes => nTomatoes + (Math.floor((newTime - newExtra)*60/25)))
    }

    return (
        <View style={styles.container}>
            <Timer scrollIt={scrollIt} saveData={(newTime, newExtra) => saveData(newTime, newExtra)}/>
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
