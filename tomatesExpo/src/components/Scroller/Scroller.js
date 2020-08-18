import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import Tomatoes from '../Tomatoes/Tomatoes'
import Data from '../Data/Data'
import Boton from '../Boton/Boton'
//Boton/

const scroller = (props) => {
    //console.log('[sccc]', props.nTomatoes)
    return (
        <View style={[styles.container, props.display ? null : styles.hidden]}>
            <Tomatoes nTomatoes={props.nTomatoes} extra={props.exta}/>
            <View style={styles.data}>
                <Data nTomatoes={props.nTomatoes} time={props.time}/>
            </View>
            <View style={styles.botones}>
                <Boton click={props.scrollIt} type="more"/>
                <Boton type="menu"/>
            </View>
        </View>

        
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '85%',
        width: '100%',
        backgroundColor: 'white',
        padding: 30,
        borderWidth: 3,
    },
    data:{
        marginTop: 20,
    },
    botones: {
        position: 'absolute',
        bottom: 60,
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '100%',
        paddingLeft: 80+40,
        paddingRight: 70,
    },
    hidden: {
        //display: 'none',
        height: 0,
        opacity: 0,
    }
})

export default scroller
