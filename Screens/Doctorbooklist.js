import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, ImageBackground, ActivityIndicator, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Doctorbook = ({ navigation }) => {
    const [load, setLoad] = useState(true)
    const [book, setBook] = useState('')
    useEffect(() => {
        getdata()
    }, [])


    const getdata = async () => {
        let id = await AsyncStorage.getItem('doctor');
        id = await JSON.parse(id).data._id
        console.log(id)
        if (id) {
            let data = await fetch(`https://vertual-server.vercel.app/doctor/book/apoinment/${id}`);
            data = await data.json();
            if (data) {
                setBook(data)
                console.log(book)
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


    return (
        <View style={{ flex: 1 }}>
            <Text style={{
                margin: 15,
                fontSize: 20,
                fontWeight: "bold"
            }}>Appoinment booking list</Text>
            {
                load ? <ActivityIndicator size={50}></ActivityIndicator> : <ScrollView >
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
                                        height: 170,
                                        backgroundColor: "#fff",
                                        elevation: 20,
                                    }}>
                                        <View style={{
                                            marginLeft: 20,
                                            marginTop: 25
                                        }}>
                                            <Text>Patient Name : {item.docname}</Text>
                                            <Text>Number : {item.Patientnumber}</Text>
                                            <Text style={{ fontWeight: "bold" }}>Booking id : {item._id}</Text>
                                            <Text style={{ fontWeight: "bold" }}>Video id : {item.videoid}</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                            <TouchableOpacity style={{
                                                backgroundColor: "rgb(47,188,245)",
                                                padding: 5,
                                                borderRadius: 5,
                                                width: 150,
                                                marginTop: 10
                                            }} onPress={() => navigation.navigate('doctorvideo', item.videoid)}><Text style={{
                                                textAlign: "center",
                                                color: "#fff",

                                            }}>Start</Text></TouchableOpacity>
                                            <TouchableOpacity style={{
                                                backgroundColor: "rgb(47,188,245)",
                                                padding: 5,
                                                borderRadius: 5,
                                                width: 150,
                                                marginTop: 10
                                            }} onPress={() => navigation.navigate('report', item._id)}><Text style={{
                                                textAlign: "center",
                                                color: "#fff",

                                            }}>Report</Text></TouchableOpacity>
                                        </View>
                                        <View style={{
                                            position: "absolute",
                                            right: 5
                                        }}>
                                            <Text style={{ color: "black" }}>Status : <Text style={{ color: "red", fontWeight: "bold" }}>{item.status}</Text></Text>
                                        </View>

                                    </View>
                                </View>

                            )) : <Text>NO booking</Text>
                    }

                </ScrollView>
            }


        </View>
    )
}

export default Doctorbook;