import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image, ImageBackground, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";



const Ambulancebook = ({ navigation }) => {
    const [load, setLoad] = useState(true)
    const [book, setBook] = useState('');
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitube] = useState('')

    useEffect(() => {
        getdata();


    })

    const getdata = async () => {
        let id = await AsyncStorage.getItem('doctor');
        id = await JSON.parse(id).data._id
        if (id) {
            let data = await fetch(`https://vertual-server.vercel.app/doctor/book/ambulance/${id}`);
            data = await data.json();
            if (data) {
                setBook(data)
                setLoad(false)
            }
            else {
                setLoad(false)
            }

        }
        else {
            setLoad(false)
        }

    }

    // const end = async (req, res) => {
    //     // let data = await fetch(`https://vertual-server.vercel.app/doctor/book/updateamb`, {
    //     //     method: "put",
    //     //     body: JSON.stringify({}),
    //     //     Headers: {
    //     //         'content-type': 'application/json'
    //     //     }
    //     // })
    //     // data = await data.json()
    //     // if (data) {
    //     //     console.log(data)
    //     // }
    // }

    return (
        <View style={{ flex: 1 }}>
            <Text style={{
                margin: 15,
                fontSize: 20,
                fontWeight: "bold"
            }}>Ambulance booking list</Text>
            <View>
                {
                    load ? <ActivityIndicator size={44}></ActivityIndicator> :
                        <ScrollView >
                            {
                                book && book.length > 0 ?
                                    book.map((item, index) => (
                                        <View style={{
                                            width: "95%",
                                            alignSelf: "center",
                                            marginTop: 10
                                        }} key={index}>
                                            <View style={{
                                                borderRadius: 10,
                                                height: 150,
                                                backgroundColor: "#fff",
                                                elevation: 20,
                                            }}>
                                                <View style={{
                                                    marginLeft: 20,
                                                    marginTop: 25
                                                }}>
                                                    <Text>Patient Name : {item.Patientname}</Text>
                                                    <Text>Number : {item.Paientnumber}</Text>
                                                    <Text style={{ fontWeight: "bold" }}>Booking id : {item._id}</Text>
                                                </View>
                                                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                                    <TouchableOpacity style={{
                                                        backgroundColor: "rgb(47,188,245)",
                                                        padding: 5,
                                                        borderRadius: 5,
                                                        width: 150,
                                                        marginTop: 10
                                                    }} onPress={() => navigation.navigate('map',item._id)}><Text style={{
                                                        textAlign: "center",
                                                        color: "#fff",
                                                    }}>Start</Text></TouchableOpacity>
                                                    <TouchableOpacity style={{
                                                        backgroundColor: "rgb(47,188,245)",
                                                        padding: 5,
                                                        borderRadius: 5,
                                                        width: 150,
                                                        marginTop: 10
                                                    }} ><Text style={{
                                                        textAlign: "center",
                                                        color: "#fff",

                                                    }}>Finish</Text></TouchableOpacity>
                                                </View>

                                                <View style={{
                                                    position: "absolute",
                                                    right: 5
                                                }}>
                                                    <Text style={{ color: "black" }}>Status : <Text style={{ color: "red", fontWeight: "bold" }}>{item.status}</Text></Text>
                                                </View>

                                            </View>
                                        </View>

                                    )) : <Text>No booking</Text>
                            }

                        </ScrollView>
                }

            </View>

        </View>
    )
}

export default Ambulancebook;