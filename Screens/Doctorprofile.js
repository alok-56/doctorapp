import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Doctorprofile = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    useEffect(() => {
        user()
    })

    const user = async () => {
        let id = await AsyncStorage.getItem('doctor');
        id = await JSON.parse(id)
        setName(id.data.name)
        setEmail(id.data.email)
        setNumber(id.data.number)
    }
    const logout = () => {
        AsyncStorage.clear()
        navigation.navigate('hoslogin')
    }
    return (
        <View style={{
            flex: 1,
        }}>
            <View style={{
                marginTop: 20,
                marginLeft: 20
            }}>
                <Icon onPress={() => navigation.goBack()} name="close" size={48}></Icon>
            </View>

            <View style={{
                width: "100%",
                height: 200,
                alignItems: "center",
                marginTop: 10
            }}>
                <View>
                    <Image style={{
                        height: 100,
                        width: 100,
                        borderRadius: 30,
                    }} source={require('../assets/build.png')}></Image>

                </View>
                <View style={{
                    marginTop: 15,
                    alignItems: "center"
                }}>
                    <Text style={{ fontWeight: "500" }}>{name}(Mbbs)</Text>
                    <Text>{email}</Text>
                    <Text>{number}</Text>

                </View>
            </View>
            <View style={{
                height: 1, width: "95%",
                backgroundColor: "black",
                alignSelf: "center"
            }}>

            </View>

            <View style={{
                marginTop: 20,
                width: "95%",
                height: 230,
                backgroundColor: "#fff",
                alignSelf: "center",
                elevation: 20,
                borderRadius: 10
            }}>
                <TouchableOpacity style={{
                    width: 300,
                    backgroundColor: "#2cbfe6",
                    alignSelf: "center",
                    padding: 10,
                    borderRadius: 10,
                    marginTop: 10
                }} onPress={() => navigation.navigate('doctor')}><Text style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: 'bold'
                }}>Total Appoiment</Text></TouchableOpacity>
                <TouchableOpacity style={{
                    width: 300,
                    backgroundColor: "#2cbfe6",
                    alignSelf: "center",
                    padding: 10,
                    borderRadius: 10,
                    marginTop: 10
                }} onPress={() => navigation.navigate('ambulance')}><Text style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: 'bold'
                }}>Total Ambulance Booking</Text></TouchableOpacity>
                <TouchableOpacity style={{
                    width: 300,
                    backgroundColor: "#2cbfe6",
                    alignSelf: "center",
                    padding: 10,
                    borderRadius: 10,
                    marginTop: 10
                }}><Text style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: 'bold'
                }}>Patient list</Text></TouchableOpacity>
                <TouchableOpacity style={{
                    width: 300,
                    backgroundColor: "#2cbfe6",
                    alignSelf: "center",
                    padding: 10,
                    borderRadius: 10,
                    marginTop: 10
                }}><Text style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: 'bold'
                }}>Medical report</Text></TouchableOpacity>
            </View>

            <View style={{
                height: 1, width: "95%",
                backgroundColor: "black",
                alignSelf: "center",
                marginTop: 25
            }}>

            </View>
            <View>
                <TouchableOpacity style={{
                    width: 150,
                    backgroundColor: "red",
                    alignSelf: "center",
                    padding: 10,
                    borderRadius: 10,
                    marginTop: 50
                }} onPress={logout}><Text style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: 'bold'
                }}>Logout</Text></TouchableOpacity>

            </View>
        </View>
    )
}

export default Doctorprofile;