import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const Splash = () => {
    return (
        <View style={Styles.head}>
            <ImageBackground style={{width:350,height:200}} source={require('../assets/hos.png')}></ImageBackground>
            <Text style={Styles.con}>
                VIRTUAL HOSPITAL
            </Text>
            <Text style={Styles.bot}>
                Now no more panic
            </Text>
        </View>
    )
}

export default Splash;

const Styles = StyleSheet.create({
    head: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    con: {
        fontSize: 30,
        color: "#2cbfe6",
        fontWeight: "bold"
    },
    bot: {
        fontSize: 20,
        color:"black"
    }
})