import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Timer from '../Timer/Timer'
//Timer/

const MainLayout = (props) => {
    return (
        <View style={styles.container}>
            <Timer/>
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
