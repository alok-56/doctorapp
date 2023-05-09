import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";

const HosOtp = ({ navigation, route }) => {
    const [otp1, setOtp1] = useState('')
    const [otp2, setOtp2] = useState('')
    const [otp3, setOtp3] = useState('')
    const [otp4, setOtp4] = useState('')
    const [otp5, setOtp5] = useState('')

    const [load, setLoad] = useState(false)

    const { name, email, number, password, otp } = route.params;
    const ottp = `${otp1}${otp2}${otp3}${otp4}${otp5}`


    const signup = async () => {
        setLoad(true)
        if (otp == ottp) {
            let data = await fetch(`https://vertual-server.vercel.app/doctor/signup`, {
                method: 'post',
                body: JSON.stringify({ name, number, email, password }),
                headers: {
                    'content-type': 'application/json'
                }
            })
            data = await data.json();
            if (data) {
                Alert.alert("Sign up sucessfully")
                navigation.navigate('hoslogin')
                setLoad(false)
            }
            else {
                Alert.alert("Already resitered")
                setLoad(false)
            }

        }
        else {
            Alert.alert('Wrong Otp')
            setLoad(false)
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
                    fontSize: 55,
                    color: "#fff",
                    fontWeight: "bold"

                }}>Verify</Text>
                <Text style={{
                    fontSize: 30,
                    color: "#fff",
                    fontWeight: "bold"
                }}>Otp</Text>

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
                    fontSize: 40,
                    marginTop: 50,
                    color: "black"
                }}>Verification</Text>
                <View style={{
                    flexDirection: "row",
                    alignSelf: "center",
                    marginTop: 20
                }}>
                    <TextInput style={{
                        width: 50,
                        borderWidth: 1,
                        textAlign: "center"
                    }} value={otp1} onChangeText={(text) => setOtp1(text)}>
                    </TextInput>
                    <TextInput style={{
                        width: 50,
                        borderWidth: 1,
                        marginLeft: 10,
                        textAlign: "center"

                    }} value={otp2} onChangeText={(text) => setOtp2(text)}></TextInput>
                    <TextInput style={{
                        width: 50,
                        borderWidth: 1,
                        marginLeft: 10,
                        textAlign: "center"
                    }} value={otp3} onChangeText={(text) => setOtp3(text)}></TextInput>
                    <TextInput style={{
                        width: 50,
                        borderWidth: 1,
                        marginLeft: 10,
                        textAlign: "center"
                    }} value={otp4} onChangeText={(text) => setOtp4(text)}></TextInput>
                    <TextInput style={{
                        width: 50,
                        borderWidth: 1,
                        marginLeft: 10,
                        textAlign: "center"
                    }} value={otp5} onChangeText={(text) => setOtp5(text)}></TextInput>
                </View>
                <TouchableOpacity style={{
                    width: 200,
                    padding: 10,
                    backgroundColor: '#2cbfe6',
                    alignSelf: "center",
                    marginTop: 25,
                    borderRadius: 10
                }} onPress={() => signup()}>
                    {
                        load ? <ActivityIndicator size={44}></ActivityIndicator> : <Text style={{
                            textAlign: "center",
                            fontSize: 25,
                            color: "#fff",
                            fontWeight: "bold"
                        }}>Verify</Text>
                    }


                </TouchableOpacity>



            </View>
        </View>
    )
}

export default HosOtp;