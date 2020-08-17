import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import Tomatoes from '../Tomatoes/Tomatoes'
import Data from '../Data/Data'
import Boton from '../Boton/Boton'
//Boton/

const scroller = (props) => {
    return (
        <View style={styles.container}>
            <Tomatoes tomates={props.nTomatoes} extra={props.exta}/>
            <Data tomates={props.nTomatoes} time={porps.totalTime}/>
            <View style={styles.botones}>
                <Boton type="more"/>
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
        backgroundColor: white,
    }
})

export default scroller
