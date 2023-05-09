import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from "react-native";

const Signup = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [load, setLoad] = useState(false)



    const Signup = async () => {
        setLoad(true)
        const otp = Math.floor(Math.random() * 100000)
        if (otp) {
            let data = await fetch(`https://vertual-server.vercel.app/user/veri`, {
                method: 'post',
                body: JSON.stringify({ email, otp }),
                headers: {
                    'content-type': 'application/json'
                }
            })
            data=await data.json()
            if (data) {
                setLoad(false)
                Alert.alert("OTP SEND SUCESSFULLY")
                navigation.navigate('otp',
                    {
                        name, email, number, password, otp

                    }

                )
            }
            else{
                setLoad(false)
                Alert.alert("FAILED TO SEND")

            }

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
                    fontWeight:"bold",
                    color: "black"
                }}>Resister</Text>
                <TextInput style={{
                    borderWidth: 0.9,
                    width: 350,
                    alignSelf: "center",
                    paddingLeft: 20,
                    fontSize: 20,
                    marginTop: 20,
                    borderRadius: 5
                }} placeholder="Enter Name" value={name} onChangeText={(text) => setName(text)}></TextInput>
                <TextInput style={{
                    borderWidth: 0.9,
                    width: 350,
                    alignSelf: "center",
                    paddingLeft: 20,
                    fontSize: 20,
                    marginTop: 20,
                    borderRadius: 5
                }} placeholder="Enter Email" value={email} onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput style={{
                    borderWidth: 0.9,
                    width: 350,
                    alignSelf: "center",
                    paddingLeft: 20,
                    fontSize: 20,
                    marginTop: 20,
                    borderRadius: 5
                }} placeholder="Enter Number" value={number} onChangeText={(text) => setNumber(text)}></TextInput>

                <TextInput style={{
                    borderWidth: 0.9,
                    width: 350,
                    alignSelf: "center",
                    paddingLeft: 20,
                    fontSize: 20,
                    marginTop: 20,
                    borderRadius: 5
                }} placeholder="Enter Password" value={password} onChangeText={(text) => setPassword(text)}></TextInput>
                <TouchableOpacity style={{
                    width: 200,
                    padding: 10,
                    backgroundColor: '#2cbfe6',
                    alignSelf: "center",
                    marginTop: 25,
                    borderRadius: 17
                }}>
                    {
                        load ? <ActivityIndicator size={44}></ActivityIndicator> : <Text style={{
                            textAlign: "center",
                            fontSize: 22,
                            color: "#fff",
                            fontWeight: "bold",
                           
                        }} onPress={() => Signup()}>Signup</Text>
                    }

                </TouchableOpacity>
                <Text style={{
                    textAlign: "center",
                    marginTop: 15,
                    fontSize: 18
                }}>New Users / <Text style={{
                    color: "rgb(47,188,245)",
                    fontSize: 20
                }}>Login</Text></Text>


            </View>
        </View>
    )
}

export default Signup;