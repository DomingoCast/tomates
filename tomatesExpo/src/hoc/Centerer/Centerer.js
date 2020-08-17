import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const centerer = (props) => (
    <View style={styles.centerer}>
        {props.children}
    </View>
)

const styles = StyleSheet.create({
    centerer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        //borderWidth: 3,
    }

})
export default centerer
