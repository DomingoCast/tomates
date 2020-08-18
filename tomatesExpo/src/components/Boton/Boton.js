import React from 'react'
import { StyleSheet, Text, Button,TouchableOpacity,  View } from 'react-native';
import colors from '../../style/colors'

    //<Button style={props.styling} title={props.text} onPress={props.click}/>

        //<Text> {props.text}</Text>
const boton = (props) => {
    let theB
    switch (props.type) {
        case 'more':
            theB = (
                <TouchableOpacity style={[styles.back, styles.moreBack]} onPress={props.click}>
                   <Text style={[styles.text, styles.more]}>+</Text>
                </TouchableOpacity>
            )
            break
        case 'menu':
            theB = (
                <TouchableOpacity style={[styles.back, styles.menuBack]} onPress={props.click}>
                   <Text style={[styles.text, styles.menu]}>m</Text>
                </TouchableOpacity>
            )
            break
        default:
            theB = (
                <TouchableOpacity  style={props.styling} onPress={props.click}>
                    {props.children}
                </TouchableOpacity>
            )
    }

    return (
        <>
           {theB}
        </>
    )
}
const styles = StyleSheet.create({
    back: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    text: {
        fontSize: 30,
        color: colors.white,
        fontWeight: "700",
    },
    moreBack: {
        backgroundColor: colors.red,
    },
    more: {
        fontSize: 50,
        fontWeight: "700",
        marginTop: -7,
        marginLeft: -2,
    },
    menu: {
        fontSize: 40,
        fontWeight: "700",
        marginTop: -8
    },
    menuBack: {
        backgroundColor: colors.green
    },
})

export default boton
