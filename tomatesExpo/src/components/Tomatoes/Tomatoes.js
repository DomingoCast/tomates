import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const tomatoes = (props) => {
    const theTs = []
    _.times(props.nTomatoes, () => theTs.push(<View style={styles.tomato}></View>))
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
        
    }
})
    
export default tomatoes
