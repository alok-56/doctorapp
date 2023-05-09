import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Hoslogin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)

    const login = async () => {
        setLoad(true)
        let data = await fetch(`https://vertual-server.vercel.app/doctor/login`, {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'content-type': 'application/json'
            }
        })
        data = await data.json()
        console.log(data)
        if (data) {
            Alert.alert("Login Sucessfully");
            navigation.navigate('hoshome')
            storeData(data)
            setLoad(false)

        }
        else {
            setLoad(false)
            Alert.alert("Wrong details");

        }
    }

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('doctor', jsonValue)

        } catch (e) {
            console.log(e);
        }
    }
    return (
        <View style={{
            flex: 1
        }}>
            <View style={{
                flex: 1,
                backgroundColor: "#2cbfe6",
                justifyContent: "center",
                alignItems: "center",
                borderBottomEndRadius: 20,
                borderBottomLeftRadius: 20
            }}>
                <Text style={{
                    fontSize: 50,
                    color: "#fff",
                    fontWeight: "bold"

                }}>Welcome</Text>
                <Text style={{
                    fontSize: 15,
                    color: "#fff",
                    fontWeight: "bold"
                }}>Nice to see you again</Text>

            </View>
            <View style={{
                flex: 4,
                backgroundColor: "#d6d9d9",
                borderTopEndRadius: 30,
                borderTopLeftRadius: 30,
                elevation: 30
            }}>
                <Text style={{
                    textAlign: "center",
                    fontSize: 30,
                    marginTop: 30,
                    color: "black",
                    fontWeight:"bold"
                }}>Login</Text>
                <TextInput style={{
                    borderWidth: 0.9,
                    width: 330,
                    alignSelf: "center",
                    paddingLeft: 20,
                    fontSize: 20,
                    marginTop: 20,
                    borderRadius: 5
                }} placeholder="Enter email" value={email} onChangeText={(text) => setEmail(text)}></TextInput>

                <TextInput style={{
                    borderWidth: 0.9,
                    width: 330,
                    alignSelf: "center",
                    paddingLeft: 20,
                    fontSize: 20,
                    marginTop: 25,
                    borderRadius: 5
                }} placeholder="Enter Password" value={password} onChangeText={(text) => setPassword(text)}></TextInput>
                <TouchableOpacity style={{
                    width: 200,
                    padding: 10,
                    backgroundColor: '#2cbfe6',
                    alignSelf: "center",
                    marginTop: 30,
                    borderRadius: 10
                }} onPress={() => login()}>
                    {
                        load ? <ActivityIndicator size={44}></ActivityIndicator> : <Text style={{
                            textAlign: "center",
                            fontSize: 21,
                            color: "#fff",
                            fontWeight: "bold"
                        }} >Login</Text>
                    }

                </TouchableOpacity>
                <Text style={{
                    textAlign: "center",
                    marginTop: 20,
                    fontSize: 20
                }}>Already have account / <Text style={{
                    color: "rgb(47,188,245)",
                    fontSize: 20
                }} onPress={() => navigation.navigate('hossign')}>Signup</Text></Text>


            </View>
        </View>
    )
}

export default Hoslogin;