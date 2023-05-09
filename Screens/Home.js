import React from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground, } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import HostPage from './Stream'

const Home = ({ navigation }) => {

    const nav = () => {
        navigation.navigate('dos');
    }
    return (
        <View style={{
            flex: 1
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",

            }}>
                <View>
                    <Text style={{
                        marginTop: 15,
                        fontSize: 25,
                        marginLeft: 10,
                        color:"black"
                    }}>Find your</Text>
                    <Text style={{
                        marginLeft: 10,
                        fontSize: 35,
                        fontWeight: "700",
                        color:"black"
                    }}>Solution</Text>
                </View>
                <View style={{
                    marginTop: 20,

                }}>
                    <Icon style={{

                    }} name="face" size={64} color="black" onPress={() => navigation.navigate('profile')} />

                </View>

            </View>

            <TouchableOpacity style={{
                width: "95%",
                height: 200,
                backgroundColor: " rgb(30,177,238)",
                alignSelf: "center",
                marginTop: 20,
                borderRadius: 10
            }} onPress={() => navigation.navigate('stream')}>
                <ImageBackground style={{
                    width: "100%",
                    height: "100%"
                }} source={require('../assets/doclist.png')}></ImageBackground>
                {/* <HostPage></HostPage> */}
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
                    backgroundColor: "rgb(30,177,238)",
                    height: 150,
                    borderRadius: 10
                }} onPress={nav}>
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
                    }} >Book Doctor</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: "49%",
                    height: 150,
                    borderRadius: 10,
                    backgroundColor: "rgb(30,177,238)"
                }} onPress={() => navigation.navigate('hospital')}>
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
                    }} >Book Ambulance</Text>
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
                    width: "49%",
                    height: 150,
                    borderRadius: 10,
                    backgroundColor: "rgb(30,177,238)"
                }} onPress={() => navigation.navigate('deases')}>
                    <Image style={{
                        width: "100%",
                        height: "70%",
                        alignSelf: "center",
                        marginTop: 1
                    }} source={require('../assets/build3.png')}></Image>
                    <Text style={{
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 18,
                        color: "black"
                    }}>Know Disease</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: "49%",
                    backgroundColor: "rgb(30,177,238)",
                    height: 150,
                    borderRadius: 10
                }} onPress={() => navigation.navigate('health')}>
                    <Image style={{
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
                    }} >Health Guide</Text>
                </TouchableOpacity>
            </View>








        </View>





    )
}

export default Home;