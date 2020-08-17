import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Timer from '../Timer/Timer'
//Timer/

const MainLayout = (props) => {
    [dScroller, setDS] = useState(false)
    const scrollIt = () => {
        setDS(true)
    }
    return (
        <View style={styles.container}>
            <Timer scrollIt={scrollIt}/>
            <Scroller display={displayScroller}/>
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
