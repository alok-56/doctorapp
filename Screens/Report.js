import React, { useState } from "react";

import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";


const Report = ({ navigation, route }) => {
    const id = route.params;
    console.log("alok",id)
    const [deasease, setDeasease] = useState('');
    const [test, setTest] = useState('');
    const [medicine, setMedicine] = useState('');
    const [des, setDes] = useState('');
    const [status, setStatus] = useState("completed")

    const send = async () => {
        console.log(des)
        let data = await fetch(`https://vertual-server.vercel.app/doctor/book/update`, {
            method: "put",
            body: JSON.stringify({ id, deasease, test, medicine, des, status }),
            headers: {
                "content-type": "application/json"
            }

        })

        data = await data.json()
        console.log(data)
        if (data) {
            navigation.goBack();
            console.log(data)
            Alert.alert("Report send succuessfully")
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <Text style={{
                marginTop: 30,
                marginLeft: 15,
                fontSize: 25,
                fontWeight: "500"
            }}>Make Report</Text>
            <ScrollView>
                <View style={{
                    width: "100%",
                    height: "100%",
                    marginTop: 30
                }}>
                    <TextInput style={{
                        width: 350,
                        padding: 10,
                        borderWidth: 1,
                        alignSelf: "center",
                        borderRadius: 5
                    }} placeholder="Enter Deasese" value={deasease} onChangeText={(text) => setDeasease(text)}></TextInput>
                    <TextInput style={{
                        width: 350,
                        padding: 10,
                        borderWidth: 1,
                        alignSelf: "center",
                        borderRadius: 5,
                        marginTop: 10
                    }} placeholder="Enter medicine" value={medicine} onChangeText={(text) => setMedicine(text)}></TextInput>
                    <TextInput style={{
                        width: 350,
                        padding: 10,
                        borderWidth: 1,
                        alignSelf: "center",
                        borderRadius: 5,
                        marginTop: 10
                    }} placeholder="Enter Preferred Test" value={test} onChangeText={(text) => setTest(text)}></TextInput>
                    <TextInput style={{
                        width: 350,
                        height: 200,
                        borderWidth: 1,
                        alignSelf: "center",
                        borderRadius: 5,
                        marginTop: 10,
                        textAlign: "left"
                    }} placeholder="description" value={des} onChangeText={(text) => setDes(text)}></TextInput>
                    <TouchableOpacity style={{
                        width: 300,
                        padding: 10,
                        backgroundColor: "#2cbfe6",
                        alignSelf: "center",
                        marginTop: 40,
                        borderRadius: 5
                    }} onPress={() => send()}>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 20,
                            color: "#fff",
                            fontWeight: "bold"
                        }}>Send</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>


        </View>
    )
}

export default Report;