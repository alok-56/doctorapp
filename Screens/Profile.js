import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ navigation }) => {
    const logout = () => {
        AsyncStorage.clear();
        navigation.navigate('login')
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
                    <Text style={{ fontWeight: "500" }}>Alok kumar</Text>
                    <Text>alokkumar11746@gmail.com</Text>
                    <Text>834017571</Text>

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
                }} onPress={() => navigation.navigate('patientdoctor')}><Text style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: 'bold'
                }} >Doctor Appoinement</Text></TouchableOpacity>
                <TouchableOpacity style={{
                    width: 300,
                    backgroundColor: "#2cbfe6",
                    alignSelf: "center",
                    padding: 10,
                    borderRadius: 10,
                    marginTop: 10
                }} onPress={() => navigation.navigate('patientambulance')}><Text style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: 'bold'
                }}>Ambulance  Booking List</Text></TouchableOpacity>
                <TouchableOpacity style={{
                    width: 300,
                    backgroundColor: "#2cbfe6",
                    alignSelf: "center",
                    padding: 10,
                    borderRadius: 10,
                    marginTop: 10
                }} onPress={() => navigation.navigate('doctorprofile')}><Text style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: 'bold'
                }} >Doctor profile</Text></TouchableOpacity>
                <TouchableOpacity style={{
                    width: 300,
                    backgroundColor: "#2cbfe6",
                    alignSelf: "center",
                    padding: 10,
                    borderRadius: 10,
                    marginTop: 10
                }} onPress={() => navigation.navigate('patientreport')}><Text style={{
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
                }}><Text style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: 'bold'
                }} onPress={logout}>Logout</Text></TouchableOpacity>

            </View>
        </View>
    )
}

export default Profile;