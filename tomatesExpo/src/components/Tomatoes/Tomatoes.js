import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import _ from 'lodash'
import colors from '../../style/colors'

const tomatoes = (props) => {
    //console.log('wasap', props.nTomatoes)
    const theTs = []
    _.times(props.nTomatoes, () => {
        console.log('legoo', props.nTomatoes)
        theTs.push(<View style={styles.tomato}></View>)
    })
    return (
        <View style={styles.container}>
            {theTs}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        //borderWidth: 3
        
    },
    tomato: {
        width: 30,
        height: 30,
        backgroundColor: colors.red,
        borderRadius: 100,
        margin: 3,
    }
})
    
export default tomatoes
