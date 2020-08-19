//import { StatusBar } from 'expo-status-bar';

import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo'

import MainLayout from './containers/MainLayout/MainLayout'

const App = () => {
    console.log('[APP]')
    let [fontsLoaded, error] = useFonts({
        'RudaRegular': require('../assets/fonts/static/Ruda-Regular.ttf'),
        'RudaBold': require('../assets/fonts/static/Ruda-Bold.ttf'),
        //Bold/
    })
    if (error){
        console.log('[ERROR]', error)
    } 
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'RudaRegular',
      },
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
                <View style={styles.container}>
                    <MainLayout/>
                </View>
      );
    }
}


export default App
