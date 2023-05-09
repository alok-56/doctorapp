import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground, TextInput, ScrollView, Button, Alert, } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Hoststream from "./Hoststream";
import axios from "axios";

const Hoshome = ({ navigation }) => {
    const [key, setKey] = useState('')
    const [load, setLoad] = useState(false)
    const stream = () => {
        if (key == "alok") {
            Alert.alert("Streaming started")
            setLoad(true)
            setKey('')
        }
    }
    


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b562a23a81msh3de28e9f93ec221p14b2b2jsna0bd6778cca7',
            'X-RapidAPI-Host': 'alcohol-consumption-by-country.p.rapidapi.com'
        }
    };
    
    fetch('https://alcohol-consumption-by-country.p.rapidapi.com/backend/alcohol-consumption-by-country/data/india', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
    return (
        <View style={{
            flex: 1
        }}>
            <ScrollView>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",

                }}>
                    <View>
                        <Text style={{
                            marginTop: 15,
                            fontSize: 25,
                            marginLeft: 10,
                        }}>Find your</Text>
                        <Text style={{
                            marginLeft: 10,
                            fontSize: 35,
                            fontWeight: "700"
                        }}>Patient</Text>
                    </View>
                    <View style={{
                        marginTop: 20,

                    }}>
                        <Icon style={{

                        }} name="face" size={64} color="black" onPress={() => navigation.navigate('doctorprofile')} />

                    </View>
                </View>

                <TouchableOpacity style={{
                    width: "95%",
                    height: 200,
                    backgroundColor: " rgb(30,177,238)",
                    alignSelf: "center",
                    marginTop: 20,
                    borderRadius: 10
                }} onPress={() => navigation.navigate('hoststream')}>
                    {
                        load ? <Hoststream></Hoststream> : <ImageBackground style={{
                            width: "100%",
                            height: "100%"
                        }} source={require('../assets/build.png')}></ImageBackground>

                    }

                </TouchableOpacity>

                <View style={{
                    flexDirection: "row",
                    marginTop: 25,
                    backgroundColor: "#fff",
                    width: "100%",
                    justifyContent: "space-between",
                    padding: 5
                }}>
                    <TouchableOpacity style={{
                        width: "49%",
                        height: 150,
                        borderRadius: 10,
                        backgroundColor: "rgb(30,177,238)"
                    }} onPress={() => navigation.navigate('ambulance')}>
                        <Image style={{
                            width: "100%",
                            height: "70%",
                            alignSelf: "center",
                            marginTop: 1
                        }} source={require('../assets/build1.png')}></Image>
                        <Text style={{
                            textAlign: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: 18,
                            color: "black"
                        }} >Ambulance Book</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: "49%",
                        backgroundColor: "rgb(30,177,238)",
                        height: 150,
                        borderRadius: 10
                    }} onPress={() => navigation.navigate('doctor')} >
                        <Image style={{
                            width: "100%",
                            height: "75%",
                            alignSelf: "center",
                            marginTop: 1
                        }} source={require('../assets/build.png')}></Image>
                        <Text style={{
                            textAlign: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: 18,

                            color: "black"
                        }} >Appoinment list</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    marginTop: 8,
                    backgroundColor: "#fff",
                    width: "100%",
                    justifyContent: "space-between",
                    padding: 5
                }}>

                    <TouchableOpacity style={{
                        width: "100%",
                        backgroundColor: "rgb(30,177,238)",
                        height: 150,
                        borderRadius: 10
                    }}  >
                        <TextInput style={{
                            width: 300,
                            padding: 10,
                            borderWidth: 1,
                            alignSelf: "center",
                            marginTop: 10,
                            borderColor: "black",
                            paddingLeft: 20,
                            fontSize: 20
                        }} onChangeText={(text) => setKey(text)} placeholder="Enter Code"></TextInput>
                        <View style={{
                            width: 200,
                            alignSelf: "center",
                            marginTop: 10
                        }}>
                            <Button onPress={stream} title="Start Stream"></Button>
                        </View>

                        {/* <Image style={{
                        width: "80%",
                        height: "70%",
                        alignSelf: "center",
                        marginTop: 1
                    }} source={require('../assets/build2.png')}></Image>
                    <Text style={{
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 18,
                        color: "black"
                    }} >Health guide</Text> */}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    )
}

export default Hoshome;